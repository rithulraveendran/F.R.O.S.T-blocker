const EDUCATIONAL_KEYWORDS = [
    // --- General Academic & Study ---
    'tutorial', 'course', 'lecture', 'science', 'math', 'coding', 'study', 'university', 'college', 'exam', 
    'preparation', 'guide', 'how to', 'documentary', 'academy', 'khan', 'coursera', 'edx', 'udemy', 'lesson', 
    'learn', 'instruction', 'seminar', 'workshop', 'masterclass', 'bootcamp', 'curriculum', 'textbook',
    'classroom', 'education', 'academic', 'scholar', 'research', 'thesis', 'dissertation', 'project',

    // --- STEM (Science, Technology, Engineering, Math) ---
    'engineering', 'physics', 'chemistry', 'biology', 'mathematics', 'algebra', 'calculus', 'geometry', 
    'statistics', 'programming', 'electronics', 'circuits', 'mechanics', 'thermodynamics', 'robotics', 
    'aerospace', 'civil', 'mechanical', 'electrical', 'chemical', 'software', 'computer science',
    'data science', 'ai', 'machine learning', 'neuroscience', 'anatomy', 'physiology', 'medicine',
    'nursing', 'biomedical', 'nanotechnology', 'astronomy', 'astrophysics', 'geology', 'environmental',

    // --- Humanities & Social Sciences ---
    'history', 'geography', 'economics', 'philosophy', 'psychology', 'sociology', 'anthropology', 
    'linguistics', 'literature', 'poetry', 'art history', 'music theory', 'politics', 'law', 
    'archaeology', 'theology', 'ethics', 'logic', 'critical thinking', 'civilization', 'mythology',

    // --- Business, Finance & Professional ---
    'finance', 'accounting', 'business', 'marketing', 'management', 'entrepreneurship', 'leadership', 
    'productivity', 'soft skills', 'communication', 'writing', 'reading', 'problem solving',
    'project management', 'agile', 'scrum', 'investing', 'stock market', 'trading', 'real estate',

    // --- High-Quality Educational Creators/Channels ---
    'veritasium', 'vsauce', '3blue1brown', 'smarter everyday', 'mark rober', 'engineering explained', 
    'computerphile', 'numberphile', 'periodic videos', 'minutephysics', 'minuteearth', 'asapscience', 
    'scishow', 'kurzgesagt', 'oversimplified', 'crash course', 'ted', 'national geographic', 'pbs',

    // --- Technical Tools & Skills ---
    'python', 'javascript', 'java', 'c++', 'rust', 'sql', 'matlab', 'solidworks', 'autocad', 'excel',
    'photoshop', 'illustrator', 'premiere pro', 'figma', 'git', 'linux', 'aws', 'azure', 'docker'
];

// Inject CSS to hide inline previews and prevent hover-play initialization
const style = document.createElement('style');
style.textContent = `
    #inline-preview-player,
    ytd-video-preview,
    ytd-inline-playback-renderer,
    #preview-container,
    .ytd-video-preview {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
    }
`;
document.documentElement.appendChild(style);

function removeInlinePreviews() {
    const previewSelectors = [
        '#inline-preview-player', 
        'ytd-video-preview', 
        'ytd-inline-playback-renderer',
        '#preview-container'
    ];
    previewSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.remove());
    });
}

let lastCheckTime = 0;
function checkYouTubeTitle() {
    // Only check if we are on a WATCH page
    if (!window.location.href.includes('youtube.com/watch?v=')) return;

    // Rate limit checks to avoid issues during rapid DOM updates
    const now = Date.now();
    if (now - lastCheckTime < 1000) return;
    lastCheckTime = now;

    // Primary title selectors for the main video player ONLY
    const titleElement = document.querySelector('h1.ytd-video-primary-info-renderer, ytd-watch-metadata h1, #title h1');
    
    if (titleElement) {
        const title = titleElement.innerText.toLowerCase();
        // Ensure the title is not empty (sometimes it's empty during initial load)
        if (title.trim().length === 0) return;

        const isEducational = EDUCATIONAL_KEYWORDS.some(keyword => title.includes(keyword));

        if (!isEducational) {
            chrome.runtime.sendMessage({ action: 'redirect' });
        }
    }
}

// Global Mutation Observer
const observer = new MutationObserver((mutations) => {
    removeInlinePreviews();
    
    // Only trigger title check if relevant parts of the watch page might have changed
    const shouldCheckTitle = mutations.some(m => 
        m.target.id === 'title' || 
        m.target.classList.contains('ytd-watch-metadata') ||
        window.location.href !== lastCheckedUrl
    );

    if (shouldCheckTitle) {
        checkYouTubeTitle();
    }
});

let lastCheckedUrl = window.location.href;
observer.observe(document.body, { childList: true, subtree: true });

// Check on URL change (for SPA navigation)
setInterval(() => {
    if (window.location.href !== lastCheckedUrl) {
        lastCheckedUrl = window.location.href;
        checkYouTubeTitle();
    }
}, 2000);

// Initial checks
checkYouTubeTitle();
removeInlinePreviews();
