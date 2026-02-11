// Function to fetch HTML from a URL
async function checkUrl() {
    const urlInput = document.getElementById('urlInput').value;
    if (!urlInput) return alert("Please enter a URL");

    statusDisplay.innerText = "Fetching...";
    
    try {
        // We use allorigins.win as a proxy to bypass CORS
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(urlInput)}`;
        const response = await fetch(proxyUrl);
        const data = await response.json();
        
        if (data.contents) {
            // Put the fetched HTML into the textarea and trigger the logic
            htmlInput.value = data.contents;
            // Manually trigger the 'input' event to run the calculations
            htmlInput.dispatchEvent(new Event('input'));
        } else {
            throw new Error("Could not retrieve page content.");
        }
    } catch (error) {
        statusDisplay.innerText = "Error Fetching";
        alert("Failed to fetch URL. Note: Some sites block proxies.");
    }
}

