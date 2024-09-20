// content.js
(function() {
    // Create the bypass button
    const bypassButton = document.createElement('button');
    bypassButton.innerText = 'Bypass Verification';
    bypassButton.style.position = 'fixed';
    bypassButton.style.bottom = '20px';
    bypassButton.style.right = '20px';
    bypassButton.style.zIndex = '9999';
    bypassButton.style.padding = '10px';
    bypassButton.style.backgroundColor = '#28a745';
    bypassButton.style.color = '#fff';
    bypassButton.style.border = 'none';
    bypassButton.style.borderRadius = '5px';
    bypassButton.style.cursor = 'pointer';
  
    // Append the button to the body
    document.body.appendChild(bypassButton);
  
    // Add the click event to the button
    bypassButton.addEventListener('click', async () => {
      try {
        const response = await fetch('/internal/worker/verifications/completed-outlier-identity', {
          method: 'POST',
          headers: {
            'Host': 'app.outlier.ai',
            'Cookie': '_gcl_au=1.1.1371629484.1726665037; _ga=GA1.1.1176238339.1726665037; _tt_enable_cookie=1; _ttp=mh-fSOazUc18E_c6eQqSz4oE1Ch; _RCRTX03=663cf93e75bf11efb77897d439a4c2c803ef40b9d1344f11b0a9570113a8a03e; _RCRTX03-samesite=663cf93e75bf11efb77897d439a4c2c803ef40b9d1344f11b0a9570113a8a03e; _jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQ3MzA2NzI2NzA1N2Y3N2IzNGNkNGIiLCJzdWIiOiJlZGU0NDRkZC04OTJiLTQwYzMtOTFkYS02MzZhZGIzYzNiMjkiLCJzdGFydGVkQXQiOjE3MjY2NjUxODkxMDMsIm1heFJlZnJlc2giOjE3MzE4NDkxODkxMDMsImlhdCI6MTcyNjY3NDU3MywiZXhwIjoxNzI2OTMzNzczfQ.7PyI-wwovCo_q9csa7OQSxgJ3jJ03_CvYSnAbPLcZII; sjs_user_id=c6f36c4b-0abb-4228-b508-75205b738e06; ...', // Add the rest of your cookies here
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Sec-Ch-Ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
            'Device-Memory': '8',
            'Dnt': '1',
            'X-Csrf-Token': '2SmD+Ke7c8CpNK2G/qZmuSsQnUYnGfig7JLbyOf1v4Y=:Asi/OA/EqDSIh44u76G8Dg==',
            'Sec-Ch-Ua-Mobile': '?1',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36',
            'Sec-Ch-Ua-Arch': '',
            'Viewport-Width': '130',
            'Sec-Ch-Ua-Full-Version': '128.0.6613.138',
            'Sec-Ch-Ua-Platform-Version': '6.0',
            'Dpr': '2',
            'Sec-Ch-Ua-Model': 'Nexus 5',
            'Sec-Ch-Ua-Platform': 'Android',
            'Accept': '*/*',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://app.outlier.ai/',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en,en-US;q=0.9,sw;q=0.8'
          }
        });
  
        if (response.ok) {
          alert('Bypassed verification successfully!');
        } else {
          alert('Failed to bypass verification.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while bypassing verification.');
      }
    });
  })();
  