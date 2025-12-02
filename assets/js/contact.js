// Contact Page JavaScript
async function initContact(content) {
    const contact = content.contact;

    // Update contact details
    document.getElementById('contact-phone').textContent = contact.phone;
    document.getElementById('contact-phone').href = `tel:${contact.phone}`;

    document.getElementById('contact-location').textContent = contact.location;

    document.getElementById('contact-hours-weekday').textContent = `Mon - Sat: ${contact.hours.weekdays}`;
    document.getElementById('contact-hours-sunday').textContent = `Sunday: ${contact.hours.sunday}`;

    if (contact.email) {
        document.getElementById('contact-email').textContent = contact.email;
        document.getElementById('contact-email').href = `mailto:${contact.email}`;
    }

    // Social media links
    document.getElementById('contact-facebook').href = contact.facebook;
    document.getElementById('contact-instagram').href = contact.instagram;

    // WhatsApp button
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const whatsappNumber = contact.whatsapp.replace(/[^0-9]/g, '');
    whatsappBtn.href = `https://wa.me/${whatsappNumber}`;
    whatsappBtn.target = '_blank';

    // Google Maps
    const mapContainer = document.getElementById('map-container');
    const iframe = document.createElement('iframe');
    iframe.src = contact.mapEmbed;
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    mapContainer.appendChild(iframe);
}

window.initContact = initContact;
