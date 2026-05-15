import { UNLOCK_DATE, REDIRECT_TARGET, BLOCKED_DOMAINS } from './constants.js';

const TIMER_LIMIT_MS = 15 * 60 * 1000; // 15 minutes

// Helper to check if we are still in the blocking period
function isBlockingActive() {
    return new Date() < UNLOCK_DATE;
}

// Anti-tamper: Block extensions page (Multiple listeners for maximum reliability)
const blockExtensions = (details) => {
    if (!isBlockingActive()) return;
    const url = details.url || details.pendingUrl;
    if (url && (url.startsWith('chrome://extensions') || url.startsWith('chrome://settings/extensions'))) {
        const tabId = details.tabId || details.id;
        chrome.tabs.update(tabId, { url: REDIRECT_TARGET });
    }
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => blockExtensions(tab));
chrome.webNavigation.onBeforeNavigate.addListener((details) => blockExtensions(details));
chrome.webNavigation.onCommitted.addListener((details) => blockExtensions(details));

// Main blocking logic
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!isBlockingActive()) return;
    if (!tab.url) return;

    const url = tab.url.toLowerCase();

    // Block Social Media
    const isSocialBlocked = BLOCKED_DOMAINS.some(domain => url.includes(domain));
    if (isSocialBlocked) {
        chrome.tabs.update(tabId, { url: REDIRECT_TARGET });
        return;
    }

    // Block YouTube Shorts
    if (url.includes('youtube.com/shorts/')) {
        chrome.tabs.update(tabId, { url: REDIRECT_TARGET });
        return;
    }
});

// Timer Logic
async function updateTimer(incrementMs) {
    if (!isBlockingActive()) return;

    const tabs = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    if (tabs.length === 0) return;

    const activeTab = tabs[0];
    if (!activeTab.url) return;

    const url = activeTab.url.toLowerCase();
    
    const isTracked = BLOCKED_DOMAINS.some(domain => url.includes(domain)) || url.includes('youtube.com');

    if (isTracked) {
        const today = new Date().toISOString().split('T')[0];
        const data = await chrome.storage.local.get(['last_reset_date', 'today_usage']);
        
        let usage = data.today_usage || 0;
        if (data.last_reset_date !== today) {
            usage = 0;
        }

        usage += incrementMs;

        await chrome.storage.local.set({
            today_usage: usage,
            last_reset_date: today
        });

        if (usage >= TIMER_LIMIT_MS) {
            chrome.tabs.update(activeTab.id, { url: REDIRECT_TARGET });
        }
    }
}

// Set up alarm for periodic background check (1 minute)
chrome.alarms.create('timerAlarm', { periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'timerAlarm') {
        updateTimer(60000);
    }
});

// Also use setInterval for more frequent updates while service worker is active (10 seconds)
setInterval(() => updateTimer(10000), 10000);

// Listen for messages from content script (YouTube validation)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (!isBlockingActive()) return;

    if (request.action === 'redirect' && sender.tab) {
        chrome.tabs.update(sender.tab.id, { url: REDIRECT_TARGET });
    }
});
