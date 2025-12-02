// Booking Page JavaScript
async function initBooking(content) {
    if (!content.booking) return;

    // Populate booking process steps
    const bookingSteps = document.getElementById('booking-steps');
    if (bookingSteps) {
        content.booking.process.forEach(item => {
            const step = document.createElement('div');
            step.className = 'booking-step';
            step.innerHTML = `
        <h3>${item.step}</h3>
        <p>${item.description}</p>
      `;
            bookingSteps.appendChild(step);
        });
    }

    // Populate what to bring
    const whatToBring = document.getElementById('what-to-bring');
    if (whatToBring) {
        content.booking.whatToBring.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            whatToBring.appendChild(li);
        });
    }

    // Populate preparation tips
    const preparationTips = document.getElementById('preparation-tips');
    if (preparationTips) {
        content.booking.preparation.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            preparationTips.appendChild(li);
        });
    }
}

window.initBooking = initBooking;
