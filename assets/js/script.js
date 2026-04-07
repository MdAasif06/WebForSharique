// Perwez Associate - Static Site Scripts

const WHATSAPP_NUMBER = '917479889661';

function setupWhatsAppQuoteForm() {
    const form = document.getElementById('whatsapp-quote-form');
    const status = document.getElementById('quote-form-status');

    if (!form || !status) {
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const name = String(formData.get('name') || '').trim();
        const email = String(formData.get('email') || '').trim();
        const category = String(formData.get('category') || '').trim();
        const message = String(formData.get('message') || '').trim();

        if (!name || !email || !category || !message) {
            status.textContent = 'Please fill all fields before sending.';
            return;
        }

        const whatsappMessage = [
            'Hello Perwez Associate,',
            '',
            'I want a free quote.',
            `Name: ${name}`,
            `Email: ${email}`,
            `Category: ${category}`,
            `Message: ${message}`
        ].join('\n');

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

        status.textContent = 'Opening WhatsApp with your quote details...';
        window.open(whatsappUrl, '_blank', 'noopener');
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    window.addEventListener('scroll', () => {
        let current = '';

        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    setupWhatsAppQuoteForm();
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
