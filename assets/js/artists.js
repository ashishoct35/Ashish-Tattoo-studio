// Artists Page JavaScript
async function initArtists(content) {
    const container = document.getElementById('artists-container');
    if (!container) return;

    content.artists.forEach(artist => {
        const artistProfile = document.createElement('div');
        artistProfile.className = 'artist-profile';

        const galleryHTML = artist.gallery.map(img => `
      <div class="artist-gallery-item">
        <img src="../${img}" alt="${artist.name}'s work" loading="lazy"
             onerror="this.src='https://via.placeholder.com/300x300/1a1a1a/d4af37?text=Portfolio'">
      </div>
    `).join('');

        artistProfile.innerHTML = `
      <div class="artist-main-image">
        <img src="../${artist.photo}" alt="${artist.name}" loading="lazy"
             onerror="this.src='https://via.placeholder.com/400x400/1a1a1a/d4af37?text=${artist.name}'">
      </div>
      <div class="artist-details">
        <h2>${artist.name}</h2>
        <p class="artist-specialty">${artist.speciality}</p>
        <span class="artist-experience">${artist.experience} Experience</span>
        <p class="artist-bio">${artist.bio}</p>
        <h3 style="color: var(--color-accent-rose); margin-top: var(--spacing-lg);">Featured Work</h3>
        <div class="artist-gallery">
          ${galleryHTML}
        </div>
      </div>
    `;

        container.appendChild(artistProfile);
    });
}

window.initArtists = initArtists;
