let isActive = false;

function toggleStyles() {
    isActive = !isActive;
    if (isActive) {
        document.body.classList.add('check-highlight-active');
    } else {
        document.body.classList.remove('check-highlight-active');
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggle") {
        toggleStyles();
    }
}); 