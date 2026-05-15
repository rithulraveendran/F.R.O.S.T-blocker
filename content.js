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

// Inject CSS to hide inline previews
const style = document.createElement('style');
style.textContent = `
    #inline-preview-player,
    ytd-video-preview,
    ytd-inline-playback-renderer {
        display: none !important;
    }
`;
document.documentElement.appendChild(style);

function removeInlinePreviews() {
    const previewSelectors = ['#inline-preview-player', 'ytd-video-preview', 'ytd-inline-playback-renderer'];
    previewSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.remove());
    });
}

function checkYouTubeTitle() {
    if (!window.location.href.includes('youtube.com/watch?v=')) return;

    const titleElement = document.querySelector('h1.ytd-video-primary-info-renderer, #title h1, h1.style-scope.ytd-watch-metadata');
    
    if (titleElement) {
        const title = titleElement.innerText.toLowerCase();
        const isEducational = EDUCATIONAL_KEYWORDS.some(keyword => title.includes(keyword));

        if (!isEducational) {
            chrome.runtime.sendMessage({ action: 'redirect' });
        }
    } else {
        setTimeout(checkYouTubeTitle, 1000);
    }
}

const observer = new MutationObserver(() => {
    checkYouTubeTitle();
    removeInlinePreviews();
});

observer.observe(document, { childList: true, subtree: true });

// Initial checks
checkYouTubeTitle();
removeInlinePreviews();
