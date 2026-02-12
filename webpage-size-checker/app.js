// Function to fetch HTML from a URL
async function checkUrl() {
    const urlInput = document.getElementById('urlInput').value.trim();
    if (!urlInput) return alert("Please enter a URL");

    let targetUrl = urlInput;
    if (!/^https?:\/\//i.test(targetUrl)) {
        targetUrl = 'https://' + targetUrl;
    }

    statusDisplay.innerText = "Fetching...";
    statusDisplay.className = "text-xl font-bold text-indigo-400 animate-pulse";
    
    // We try Proxy A, and if it fails, we can eventually add Proxy B
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;
    
    try {
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
            throw new Error(`Proxy error: ${response.status}`);
        }
        
        const htmlContent = await response.text();
        
        if (htmlContent && htmlContent.length > 50) { // Check if we got actual HTML
            htmlInput.value = htmlContent;
            htmlInput.dispatchEvent(new Event('input'));
            statusDisplay.innerText = "Fetch Success";
            statusDisplay.className = "text-xl font-bold text-green-500";
        } else {
            throw new Error("Empty response");
        }
    } catch (error) {
        console.error("Detailed Error:", error);
        statusDisplay.innerText = "Fetch Failed";
        statusDisplay.className = "text-xl font-bold text-red-500";
        
        // Final helpful advice for the user
        alert("GitHub Pages Security / CORS Block:\n\nMost sites block direct fetching. Please use 'Method 2' by right-clicking the target page, selecting 'View Page Source', and pasting the code here.");
    }
}
        statusDisplay.className = "text-xl font-bold text-red-500";
        alert("Failed to fetch URL. Many large sites (like Google/Amazon) block these proxies. If this happens, please use 'Method 2: Paste Source Code' instead.");
    }
}

