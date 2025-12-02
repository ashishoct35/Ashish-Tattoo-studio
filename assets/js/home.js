// Home Page JavaScript
async function initHome(content) {
    // Update hero content
    const heroTitle = document.querySelector('[data-hero-title]');
    const heroSubtitle = document.querySelector('[data-hero-subtitle]');
    const tagline = document.querySelector('[data-tagline]');

    if (heroTitle) heroTitle.textContent = content.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = content.hero.subtitle;
    if (tagline) tagline.textContent = content.tagline;

    // Update stats
    const stats = content.socialProof;
    document.querySelector('[data-years]').textContent = stats.yearsInBusiness;
    document.querySelector('[data-clients]').textContent = stats.happyClients;
    document.querySelector('[data-artists]').textContent = content.artists.length;

    // Populate featured portfolio (first 6 images from random categories)
    populateFeaturedPortfolio(content);

    // Populate services (first 4)
    populateServices(content);

    // Populate artists
    populateArtists(content);

    // Update footer
    updateFooter(content);
}

function populateFeaturedPortfolio(content) {
    const container = document.getElementById('featured-portfolio');
    if (!container) return;

    const featured = [];

    // Get images from each category
    content.portfolioCategories.forEach(category => {
        if (category.images.length > 0) {
            featured.push({
                image: category.images[0],
                category: category.name
            });
        }
    });

    // Take first 6
    featured.slice(0, 6).forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
      <img src="${item.image}" alt="${item.category} tattoo" loading="lazy" 
           onerror="this.src='https://via.placeholder.com/400x400/1a1a1a/d4af37?text=${item.category}'">
      <div class="portfolio-item-overlay">
        <h3 class="portfolio-item-title">${item.category}</h3>
      </div>
    `;
        container.appendChild(portfolioItem);
    });
}

function populateServices(content) {
    const container = document.getElementById('services-grid');
    if (!container) return;

    // Show first 4 services
    content.services.slice(0, 4).forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
      <span class="service-icon">${service.icon}</span>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
    `;
        container.appendChild(serviceCard);
    });
}

function populateArtists(content) {
    const container = document.getElementById('artists-grid');
    if (!container) return;

    content.artists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.className = 'artist-card';
        artistCard.innerHTML = `
      <div class="artist-image">
        <img src="${artist.photo}" alt="${artist.name}" loading="lazy"
             onerror="this.src='https://via.placeholder.com/400x400/1a1a1a/d4af37?text=${artist.name}'">
      </div>
      <div class="artist-info">
        <h3 class="artist-name">${artist.name}</h3>
        <p class="artist-specialty">${artist.speciality}</p>
        <p class="artist-experience">${artist.experience} Experience</p>
      </div>
    `;
        container.appendChild(artistCard);
    });
}

function updateFooter(content) {
    const contact = content.contact;

    const phoneLink = document.getElementById('footer-phone');
    const location = document.getElementById('footer-location');
    const hours = document.getElementById('footer-hours');

    if (phoneLink) {
        phoneLink.textContent = contact.phone;
        phoneLink.href = `tel:${contact.phone}`;
    }

    if (location) {
        location.textContent = contact.location;
    }

    if (hours) {
        hours.textContent = `${contact.hours.weekdays} (Mon-Sat)`;
    }

    // Social links
    document.getElementById('social-facebook').href = contact.facebook;
    document.getElementById('social-instagram').href = contact.instagram;
    document.getElementById('social-whatsapp').href = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`;
}

// Export globally so main.js can call it
window.initHome = initHome;
