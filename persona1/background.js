chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    if (details.url.includes("withpersona.com")) {
      // Copy the existing headers to safely modify
      let headers = details.requestHeaders;

      // Modify headers as needed
      headers.forEach(header => {
        const headerName = header.name.toLowerCase();

        switch (headerName) {
          case 'sec-ch-ua':
            header.value = '"Chromium";v="122", "Not(A:Brand";v="24", "Samsung Internet";v="26.0"';
            break;
          case 'sec-ch-ua-mobile':
            header.value = '?1';
            break;
          case 'sec-ch-ua-full-version':
            header.value = '"122.0.6261.120"';
            break;
          case 'sec-ch-ua-platform':
            header.value = '"Android"';
            break;
          case 'sec-ch-ua-platform-version':
            header.value = '"14.0.0"';
            break;
          case 'sec-ch-ua-model':
            header.value = '"SM-A135F"';
            break;
          case 'sec-ch-ua-full-version-list':
            header.value = '"Chromium";v="122.0.6261.120", "Not(A:Brand";v="24.0.0.0", "Samsung Internet";v="26.0.3.7"';
            break;
          case 'accept-language':
            header.value = 'en-GB,en,en-US,en';
            break;
          case 'upgrade-insecure-requests':
            header.value = '1';
            break;
          case 'persona-device-id':
            header.value = 'dev_TfQYEMPkCn59qUTQywy9CQD7UPgg';
            break;
          case 'sec-fetch-site':
            header.value = 'cross-site';
            break;
          case 'user-agent':
            header.value = 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/26.0 Chrome/122.0.0.0 Mobile Safari/537.36';
            break;
          case 'accept':
            header.value = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7';
            break;
        }
      });

      // Remove unwanted headers by mutating the array directly
      for (let i = headers.length - 1; i >= 0; i--) {
        const headerName = headers[i].name.toLowerCase();
        if (headerName === 'sec-fetch-user' || headerName === 'priority' || headerName === 'Dnt') {
          headers.splice(i, 1);  // Remove the unwanted header
        }
      }

      return { requestHeaders: headers };
    }
  },
  { urls: ["*://*.withpersona.com/*"] },
  ["blocking", "requestHeaders"]
);

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);

    // Detect the GET request for /verify and the code parameter
    if (url.pathname === "/verify" && url.searchParams.has("code")) {
      // Check if "device-handoff-method" is already present, if not, append it
      if (!url.searchParams.has("device-handoff-method")) {
        // Append `&device-handoff-method=qr` to the query string
        url.searchParams.append("device-handoff-method", "qr");
      }

      // Redirect the request to the new URL with the modified query
      return { redirectUrl: url.toString() };
    }
  },
  { urls: ["*://*.withpersona.com/*"] },
  ["blocking"]
);
