// About Page JavaScript
async function initAbout(content) {
    if (!content.about) return;

    // Update history
    const history = document.getElementById('about-history');
    if (history) {
        history.textContent = content.about.history;
    }

    // Update mission
    const mission = document.getElementById('about-mission');
    if (mission) {
        mission.textContent = content.about.mission;
    }

    // Populate values
    const valuesList = document.getElementById('values-list');
    if (valuesList && content.about.values) {
        content.about.values.forEach(value => {
            const li = document.createElement('li');
            // Split on colon to make the title bold
            const parts = value.split(':');
            if (parts.length > 1) {
                li.innerHTML = `<strong>${parts[0]}:</strong>${parts.slice(1).join(':')}`;
            } else {
                li.textContent = value;
            }
            valuesList.appendChild(li);
        });
    }
}

window.initAbout = initAbout;
