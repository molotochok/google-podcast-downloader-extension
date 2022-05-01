chrome.runtime.onMessage.addListener(function(arg, sender, sendResponse) {
  chrome.downloads.download(
    {
      url: arg.url,
      filename: arg.filename,
    }
  );
  return true;
});