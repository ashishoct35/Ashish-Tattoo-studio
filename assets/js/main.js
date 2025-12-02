// Main JavaScript - Content Loading and Initialization
let siteContent = null;

// Load content from JSON
async function loadContent() {
    try {
        const response = await fetch('../content.json');
        siteContent = await response.json();
        return siteContent;
    } catch (error) {
        console.error('Error loading content:', error);
        return null;
    }
}

// Initialize page
async function initializePage() {
    const content = await loadContent();
    if (!content) return;

    // Update logo and studio name
    updateBranding(content);

    // Initialize page-specific content
    const pageName = getPageName();
    if (window[`init${capitalize(pageName)}`]) {
        window[`init${capitalize(pageName)}`](content);
    }

    // Add intersection observer for animations
    observeElements();

    // Initialize smooth scroll
    initSmoothScroll();
}

// Update branding elements
function updateBranding(content) {
    const logoElements = document.querySelectorAll('[data-logo]');
    logoElements.forEach(el => {
        if (el.tagName === 'IMG') {
            el.src = `../${content.logo}`;
            el.alt = content.studioName;
        }
    });

    const studioNameElements = document.querySelectorAll('[data-studio-name]');
    studioNameElements.forEach(el => {
        el.textContent = content.studioName;
    });
}

// Get current page name
function getPageName() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '');
    return page === '' || page === 'index' ? 'home' : page;
}

// Capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Intersection Observer for scroll animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility: Create element with classes and attributes
function createElement(tag, classes = [], attributes = {}, textContent = '') {
    const element = document.createElement(tag);
    if (classes.length) element.classList.add(...classes);
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    if (textContent) element.textContent = textContent;
    return element;
}

// Utility: Format currency
function formatCurrency(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initializePage);

// Export for use in other scripts
window.siteContent = siteContent;
window.loadContent = loadContent;
window.createElement = createElement;
window.formatCurrency = formatCurrency;
