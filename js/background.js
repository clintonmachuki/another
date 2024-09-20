chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      console.log("Intercepted request:", details.url);
      
      if (details.url === "https://cdn.withpersona.com/vite/assets/inquiry/inquiry-BqPZ-YU_.js") {
        console.log("Redirecting to new script URL.");
        return {
          redirectUrl: "https://cdn.jsdelivr.net/gh/clintonmachuki/another/inquiry-BqPZ-YU_.js"
        };
      }
  
      console.log("No redirection needed for:", details.url);
    },
    { urls: ["*://cdn.withpersona.com/*"] },
    ["blocking"]
  );
  
  // Optional: Log when the background script is loaded
  console.log("Background script loaded.");
  