// Services Page JavaScript
async function initServices(content) {
    // Populate services
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        content.services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.innerHTML = `
        <span class="service-icon">${service.icon}</span>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
      `;
            servicesGrid.appendChild(serviceCard);
        });
    }

    // Populate aftercare instructions
    const aftercareGrid = document.getElementById('aftercare-grid');
    if (aftercareGrid && content.aftercare) {
        content.aftercare.instructions.forEach((instruction, index) => {
            const aftercareItem = document.createElement('div');
            aftercareItem.className = 'aftercare-item';
            aftercareItem.innerHTML = `
        <div class="aftercare-number">${index + 1}</div>
        <p class="aftercare-text">${instruction}</p>
      `;
            aftercareGrid.appendChild(aftercareItem);
        });
    }
}

window.initServices = initServices;
