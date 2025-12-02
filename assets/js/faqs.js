// FAQs Page JavaScript
async function initFaqs(content) {
    const container = document.getElementById('faqs-container');
    if (!container || !content.faqs) return;

    content.faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
      <div class="faq-question">
        <h3>${faq.question}</h3>
        <span class="faq-toggle">▼</span>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-content">
          <p>${faq.answer}</p>
        </div>
      </div>
    `;

        const question = faqItem.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItem.classList.toggle('active');
        });

        container.appendChild(faqItem);
    });
}

window.initFaqs = initFaqs;
