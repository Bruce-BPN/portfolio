document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const langText = document.getElementById('lang-text');
    
    // Default language is English
    let currentLang = 'en';

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.setAttribute('lang', lang);
        
        // Update all elements with data-en and data-fr attributes
        const translatableElements = document.querySelectorAll('[data-en][data-fr]');
        
        translatableElements.forEach(el => {
            if (lang === 'fr') {
                el.innerHTML = el.getAttribute('data-fr');
            } else {
                el.innerHTML = el.getAttribute('data-en');
            }
        });

        // Update button indicator text
        if (lang === 'fr') {
            langText.textContent = 'EN';
        } else {
            langText.textContent = 'FR';
        }
    }

    // Toggle language on button click
    langBtn.addEventListener('click', () => {
        if (currentLang === 'en') {
            setLanguage('fr');
        } else {
            setLanguage('en');
        }
    });
});
