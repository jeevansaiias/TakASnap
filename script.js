// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initializing...');
    initializePortfolio();
    console.log('Portfolio initialized!');
});

function initializePortfolio() {
    // Set site title
    document.getElementById('site-title').textContent = portfolioConfig.siteTitle;
    
    // Generate gallery sections (navigation is already in HTML)
    generateGallerySections();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize navigation handlers
    initializeNavigation();
    
    // Show empty state message if no images
    checkForEmptyGalleries();
    
    console.log('Sections created, navigation initialized');
}

function generateNavigation() {
    const navMenu = document.getElementById('nav-menu');
    
    // Add category links (featured will be first/active)
    Object.keys(portfolioConfig.categories).forEach(categoryKey => {
        const category = portfolioConfig.categories[categoryKey];
        if (category.active) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${categoryKey}`;
            a.className = `nav-link ${categoryKey === 'featured' ? 'active' : ''}`;
            a.textContent = category.name;
            li.appendChild(a);
            navMenu.appendChild(li);
        }
    });
    
    // Add About link
    const aboutLi = document.createElement('li');
    const aboutA = document.createElement('a');
    aboutA.href = '#about';
    aboutA.className = 'nav-link';
    aboutA.textContent = 'ABOUT';
    aboutLi.appendChild(aboutA);
    navMenu.appendChild(aboutLi);
}

function generateGallerySections() {
    const mainContent = document.getElementById('main-content');
function generateGallerySections() {
    const mainContent = document.getElementById('main-content');
    
    // Generate gallery sections for each category (featured will be shown first)
    Object.keys(portfolioConfig.categories).forEach(categoryKey => {
        const category = portfolioConfig.categories[categoryKey];
        if (category.active) {
            const section = createGallerySection(categoryKey, category, categoryKey === 'featured');
            mainContent.appendChild(section);
        }
    });
    
    // Generate About section
    mainContent.appendChild(createAboutSection());
    
    // Generate Contact section
    mainContent.appendChild(createContactSection());
}unction createGallerySection(categoryKey, category, isActive) {
    const section = document.createElement('section');
    section.id = categoryKey;
    section.className = `gallery-section ${isActive ? 'active' : ''}`;
    
    const grid = document.createElement('div');
    grid.className = 'gallery-grid';
    
    if (category.images && category.images.length > 0) {
        category.images.forEach(image => {
            const item = createGalleryItem(image);
            grid.appendChild(item);
        });
    } else {
        // Show placeholder message when no images
        const placeholder = document.createElement('div');
        placeholder.className = 'empty-gallery';
        placeholder.innerHTML = `
            <p>No images yet in this category.</p>
            <p class="help-text">Add your photos to <code>images/${categoryKey}/</code> and update <code>config.js</code></p>
        `;
        grid.appendChild(placeholder);
    }
    
    section.appendChild(grid);
    return section;
}

function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.title || 'Gallery image';
    img.loading = 'lazy';
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    const title = document.createElement('p');
    title.textContent = image.title || '';
    overlay.appendChild(title);
    
    item.appendChild(img);
    item.appendChild(overlay);
    
    return item;
}

function createAboutSection() {
    const section = document.createElement('section');
    section.id = 'about';
    section.className = 'info-section';
    
    const content = document.createElement('div');
    content.className = 'info-content';
    
    const title = document.createElement('h2');
    title.textContent = portfolioConfig.about.title;
    content.appendChild(title);
    
    portfolioConfig.about.content.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        content.appendChild(p);
    });
    
    section.appendChild(content);
    return section;
}

function createContactSection() {
    const section = document.createElement('section');
    section.id = 'contact';
    section.className = 'info-section';
    
    const content = document.createElement('div');
    content.className = 'info-content';
    
    const title = document.createElement('h2');
    title.textContent = 'CONTACT';
    content.appendChild(title);
    
    const intro = document.createElement('p');
    intro.textContent = 'For inquiries, collaborations, or print orders:';
    content.appendChild(intro);
    
    if (portfolioConfig.contact.email) {
        const emailP = document.createElement('p');
        emailP.innerHTML = `Email: <a href="mailto:${portfolioConfig.contact.email}">${portfolioConfig.contact.email}</a>`;
        content.appendChild(emailP);
    }
    
    if (portfolioConfig.contact.instagram) {
        const instaP = document.createElement('p');
        instaP.innerHTML = `Instagram: <a href="https://instagram.com/${portfolioConfig.contact.instagram.replace('@', '')}" target="_blank">${portfolioConfig.contact.instagram}</a>`;
        content.appendChild(instaP);
    }
    
    section.appendChild(content);
    return section;
}

function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

function initializeNavigation() {
    // Re-select nav links after they're added to the DOM
    setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links and sections
                navLinks.forEach(l => l.classList.remove('active'));
                document.querySelectorAll('.gallery-section, .info-section').forEach(s => {
                    s.classList.remove('active');
                });
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Show corresponding section
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                    
                    // Smooth scroll to top
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }, 100);
}

function checkForEmptyGalleries() {
    const hasAnyImages = Object.values(portfolioConfig.categories).some(
        category => category.active && category.images && category.images.length > 0
    );
    
    if (!hasAnyImages) {
        console.log('No images configured. Please add your photos to the images folder and update config.js');
    }
}
