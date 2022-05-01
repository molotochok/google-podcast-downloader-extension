(function () {
  // To make created css classes and ids unique
  // Means: Google-Podcast-Downloader-Extension
  const CLASS_PREFIX = "gpde__";

  window.addEventListener('load', function () {
    const btn = document.createElement("button");
    btn.appendChild(document.createTextNode("🡇 Download"));
    btn.id = `${CLASS_PREFIX}download-btn`;

    btn.addEventListener("click", function() {
      const audio = document.getElementsByTagName("audio")[0];
      
      chrome.runtime.sendMessage({
        url: audio.src,
      });
    });

    document.querySelector(".Smcrqd").appendChild(btn);
  });
})();

