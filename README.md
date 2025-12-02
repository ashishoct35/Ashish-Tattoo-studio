# Ashish Tattoo Studio Website

A stunning, ultra-premium multi-page website for Ashish Tattoo Studio featuring dark aesthetics, metallic accents, smooth animations, and fully dynamic content management.

## Features

- **Multi-Page Design**: 9 responsive pages (Home, Artists, Portfolio, Services, Pricing, Booking, FAQs, About, Contact)
- **Dark Premium Theme**: Bold, artistic design with gold/rose gold metallic accents
- **JSON-Driven Content**: All content dynamically loaded from `content.json` for easy editing
- **Portfolio Gallery**: Filterable by 6 categories with lightbox and mobile swipe support
- **Smooth Animations**: Parallax effects, scroll animations, and elegant transitions
- **Mobile-First**: Fully responsive with hamburger menu and touch-optimized interactions
- **No Contact Form**: Social media links (Facebook, Instagram, WhatsApp) and phone contact only

## Technology Stack

- **HTML5** semantic markup
- **CSS3** with custom properties and animations
- **Vanilla JavaScript** for interactivity
- **Google Fonts** (Playfair Display, Inter, Montserrat)

## Project Structure

```
ashish-tattoo-studio/
├── index.html
├── content.json              # All website content
├── pages/                    # Individual pages
│   ├── artists.html
│   ├── portfolio.html
│   ├── services.html
│   ├── pricing.html
│   ├── booking.html
│   ├── faqs.html
│   ├── about.html
│   └── contact.html
├── styles/                   # CSS files
│   ├── main.css             # Core styles
│   ├── nav.css
│   ├── home.css
│   └── ...
├── assets/
│   ├── images/              # Images
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   └── portfolio/
│   └── js/                  # JavaScript files
│       ├── main.js          # Content loader
│       ├── nav.js
│       └── ...
└── README.md
```

## How to Edit Content

All website content is managed through `content.json`. Simply edit this file to update:

- Studio name and branding
- Artist profiles and galleries
- Services and pricing
- Portfolio images (by category)
- FAQs
- Contact information
- Social media links
- Google Maps location

### Updating Images

1. Place new images in `assets/images/` or `assets/images/portfolio/`
2. Update the image path in `content.json`
3. The website will automatically load the new images

## Running Locally

1. **Simple HTTP Server:**
   ```bash
   npx -y http-server . -p 8080
   ```

2. **Python Server:**
   ```bash
   python -m http.server 8080
   ```

3. Open `http://localhost:8080` in your browser

## Customization Guide

### Colors

Edit CSS custom properties in `styles/main.css`:

```css
:root {
  --color-accent-gold: #d4af37;
  --color-accent-rose: #b76e79;
  --color-bg-primary: #0a0a0a;
  /* ... */
}
```

### Typography

Change fonts in `styles/main.css`:

```css
:root {
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  /* ... */
}
```

## Image Requirements

- **Logo**: PNG with transparent background (recommended: 200x60px)
- **Hero Background**: High-quality landscape image (recommended: 1920x1080px)
- **Artist Photos**: Square images (recommended: 800x800px)
- **Portfolio Images**: Square or vertical (recommended: 800x800px minimum)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features by Page

### Home
- Full-screen hero with parallax
- Studio introduction with stats
- Featured portfolio samples
- Services overview
- Artist previews

### Portfolio
- Filterable gallery (6 categories)
- Lightbox viewer
- Keyboard navigation
- Mobile swipe support

### Artists
- Detailed profiles
- Individual galleries
- Specialties and experience

### Services
- Service cards with descriptions
- Aftercare instructions

### Pricing
- Transparent pricing breakdown
- Session types
- Deposit information

### Booking
- Step-by-step booking process
- Preparation tips
- What to bring

### FAQs
- Accordion-style interface
- 12+ common questions

### About
- Studio history
- Mission statement
- Core values

### Contact
- Phone and WhatsApp links
- Social media buttons
- Google Maps embed
- NO contact form (as requested)

## License

© 2024 Ashish Tattoo Studio. All rights reserved.

## Support

For questions or support, contact:
- Phone: +977 9851234567
- WhatsApp: +977 9851234567
- Facebook: https://facebook.com/ashishtattoo
- Instagram: https://instagram.com/ashishtattoo
