(function () {
  // To make created css classes and ids unique
  // Means: Google-Podcast-Downloader-Extension
  const CLASS_PREFIX = "gpde__";

  const tryCreateButton = () => {
    const BUTTON_ID = `${CLASS_PREFIX}download-btn`;

    const $container = document.querySelector(".Smcrqd");
    
    if(!$container) return;
    if($container.querySelector(`#${BUTTON_ID}`)) return;

    const btn = document.createElement("button");
    btn.appendChild(document.createTextNode("🡇 Download"));
    btn.id = BUTTON_ID;

    btn.addEventListener("click", function() {
      const audio = document.getElementsByTagName("audio")[0];
      
      chrome.runtime.sendMessage({
        url: audio.src,
      });
    });

    $container.appendChild(btn);
  }

  // Tries to create the button once the media player is added to the page
  const observeMediaPlayerCreation = function() {
    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          // Check if the mediaplayer is added
          // The following class name is the class of media player container
          if(node.className === "hIP55c") {
            tryCreateButton();
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  window.addEventListener('load', function () {
    observeMediaPlayerCreation();
    tryCreateButton();
  });
})();

