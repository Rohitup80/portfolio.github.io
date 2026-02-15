// Function to generate the navigation menu
// basePath handles folder depth (e.g., "" for home, "../" for subfolders)
// activePage tells the menu which link should be highlighted
function createNav(basePath, activePage) {
  
  // 1. Define the HTML for the menu
  const navHTML = `
    <nav>
      <div class="page">
        <div class="nav-content">
          <a href="${basePath}index.html" class="nav-logo">Rohit Kumar</a>
          
          <button class="menu-toggle" id="mobile-menu-btn" aria-label="Toggle navigation">
            <span class="hamburger"></span>
          </button>

          <ul class="nav-links" id="nav-links">
            <li><a href="${basePath}index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a></li>
            <li><a href="${basePath}index.html#skills">Skills</a></li>
            <li><a href="${basePath}index.html#about">About</a></li>
            <li><a href="${basePath}index.html#contact">Contact</a></li>
            <li><a href="${basePath}tools/check-moolank-and-bhagyank.html" class="${activePage === 'moolank' ? 'active' : ''}">Moolank &amp; Bhagyank</a></li>
            <li><a href="${basePath}webpage-size-checker/index.html" class="${activePage === 'sizechecker' ? 'active' : ''}">Webpage Size Checker</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  // 2. Inject the HTML into the page
  document.getElementById("nav-placeholder").innerHTML = navHTML;

  // 3. Attach the Mobile Hamburger Menu Logic
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
}