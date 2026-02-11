// Function to fetch HTML from a URL
async function checkUrl() {
    const urlInput = document.getElementById('urlInput').value.trim();
    if (!urlInput) return alert("Please enter a URL");

    // 1. Ensure the URL has http/https prefix
    let targetUrl = urlInput;
    if (!/^https?:\/\//i.test(targetUrl)) {
        targetUrl = 'https://' + targetUrl;
    }

    statusDisplay.innerText = "Fetching...";
    statusDisplay.className = "text-xl font-bold text-indigo-400 animate-pulse";
    
    try {
        // 2. Using corsproxy.io (It returns raw text, not JSON)
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;
        
        const response = await fetch(proxyUrl);
        
        if (!response.ok) throw new Error("Proxy could not reach the site.");
        
        // 3. Get the result as TEXT, not JSON
        const htmlContent = await response.text();
        
        if (htmlContent && htmlContent.trim().length > 0) {
            // 4. Put the fetched HTML into the textarea
            htmlInput.value = htmlContent;
            
            // 5. Trigger the 'input' event to run the size calculations
            htmlInput.dispatchEvent(new Event('input'));
        } else {
            throw new Error("The page returned no content.");
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        statusDisplay.innerText = "Fetch Failed";
        statusDisplay.className = "text-xl font-bold text-red-500";
        alert("Failed to fetch URL. Many large sites (like Google/Amazon) block these proxies. If this happens, please use 'Method 2: Paste Source Code' instead.");
    }
}

