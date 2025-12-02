// Portfolio Page JavaScript
let allImages = [];
let currentImageIndex = 0;

async function initPortfolio(content) {
    const gallery = document.getElementById('portfolio-gallery');
    if (!gallery) return;

    // Flatten all portfolio images with category info
    content.portfolioCategories.forEach(category => {
        category.images.forEach(image => {
            allImages.push({
                src: `../${image}`,
                category: category.slug,
                categoryName: category.name
            });
        });
    });

    // Populate gallery
    allImages.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item`;
        portfolioItem.setAttribute('data-category', item.category);
        portfolioItem.setAttribute('data-index', index);
        portfolioItem.innerHTML = `
      <img src="${item.src}" alt="${item.categoryName} tattoo" loading="lazy"
           onerror="this.src='https://via.placeholder.com/400x400/1a1a1a/d4af37?text=${item.categoryName}'">
      <div class="portfolio-overlay">
        <span class="portfolio-category">${item.categoryName}</span>
      </div>
    `;

        portfolioItem.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(portfolioItem);
    });

    // Initialize filter
    initFilter();

    // Initialize lightbox
    initLightbox();
}

function initFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filter items with smooth animation
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.3s ease';
                        item.style.opacity = '1';
                    }, 50);
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => navigateLightbox(-1));
    nextBtn.addEventListener('click', () => navigateLightbox(1));

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    currentImageIndex = index;
    lightbox.classList.add('active');
    lightboxImg.src = allImages[index].src;
    lightboxCaption.textContent = allImages[index].categoryName;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = allImages.length - 1;
    } else if (currentImageIndex >= allImages.length) {
        currentImageIndex = 0;
    }

    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImg.style.opacity = '0';
    setTimeout(() => {
        lightboxImg.src = allImages[currentImageIndex].src;
        lightboxCaption.textContent = allImages[currentImageIndex].categoryName;
        lightboxImg.style.transition = 'opacity 0.3s ease';
        lightboxImg.style.opacity = '1';
    }, 150);
}

// Touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;

    if (touchEndX < touchStartX - 50) {
        navigateLightbox(1); // Swipe left
    }
    if (touchEndX > touchStartX + 50) {
        navigateLightbox(-1); // Swipe right
    }
}

window.initPortfolio = initPortfolio;
