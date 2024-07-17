chrome.action.onClicked.addListener((tab) => {
    if(tab.url && tab.url.includes("https://pagespeed.web.dev/analysis")) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['script.js']
        });
    }
});