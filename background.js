chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({url: "*://podcasts.google.com/*"}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.reload(tab.id);
    });
  });
});

chrome.runtime.onMessage.addListener((arg, _sender, _sendResponse) => {
  chrome.downloads.download(
    {
      url: arg.url,
      filename: arg.filename,
    }
  );
  return true;
});