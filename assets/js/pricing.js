// Pricing Page JavaScript
async function initPricing(content) {
    const pricingGrid = document.getElementById('pricing-grid');
    const pricingNote = document.getElementById('pricing-note');

    if (!pricingGrid || !content.pricing) return;

    const pricing = content.pricing;

    // Create pricing cards
    const pricingItems = [
        { label: 'Hourly Rate', amount: pricing.hourlyRate, description: 'Per hour of work' },
        { label: 'Minimum Charge', amount: pricing.minimumCharge, description: 'For small tattoos' },
        { label: 'Half Day Session', amount: pricing.halfDaySession, description: '4 hours of work' },
        { label: 'Full Day Session', amount: pricing.fullDaySession, description: '8 hours of work' },
        { label: 'Consultation', amount: pricing.consultationFee, description: 'Design discussion' },
        { label: 'Deposit Required', amount: pricing.depositRequired, description: 'Non-refundable booking deposit' }
    ];

    pricingItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'pricing-card';
        card.innerHTML = `
      <div class="pricing-label">${item.label}</div>
      <div class="pricing-amount">${item.amount}</div>
      <p class="pricing-description">${item.description}</p>
    `;
        pricingGrid.appendChild(card);
    });

    // Add pricing note
    if (pricingNote && pricing.note) {
        pricingNote.textContent = pricing.note;
    }
}

window.initPricing = initPricing;
