document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    
    // Check local storage for theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        // Using Phosphor icons for Matte theme
        const icon = themeBtn.querySelector('i');
        if(icon) {
            icon.className = theme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
        }
    }

    // 2. Language Toggle Logic (i18n)
    const langBtn = document.getElementById('lang-toggle');
    const langSpan = document.getElementById('current-lang');
    
    let currentLang = localStorage.getItem('lang') || 'en';
    applyTranslations(currentLang);

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        applyTranslations(currentLang);
        localStorage.setItem('lang', currentLang);
    });

    function applyTranslations(lang) {
        if(langSpan) langSpan.textContent = lang.toUpperCase();
        
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (window.i18n && window.i18n[lang] && window.i18n[lang][key]) {
                el.innerHTML = window.i18n[lang][key];
            }
        });

        const hrefElements = document.querySelectorAll('[data-i18n-href]');
        hrefElements.forEach(el => {
            const key = el.getAttribute('data-i18n-href');
            if (window.i18n && window.i18n[lang] && window.i18n[lang][key]) {
                el.setAttribute('href', window.i18n[lang][key]);
            }
        });
    }

    // 3. Sidebar Toggle Logic
    const sidebarTab = document.getElementById('sidebarTab');
    const profileSidebar = document.getElementById('profileSidebar');
    if(sidebarTab && profileSidebar) {
        sidebarTab.addEventListener('click', () => {
            profileSidebar.classList.toggle('open');
            // Change tab icon or wording if needed based on open state
        });
    }
});
