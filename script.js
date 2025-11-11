// Language Management System
class LanguageManager {
    constructor() {
        this.currentLanguage = 'es';
        this.translations = {
            en: {
                // Navigation
                'Home': 'Home',
                'About Us': 'About Us',
                'Services': 'Services',
                'Our Team': 'Our Team',
                'Contact': 'Contact',
                
                // Hero Section
                'Professional Immigration Consulting Services': 'Professional Immigration Consulting Services',
                'Serving the Latino community in Southern California for over 25 years': 'Serving the Latino community in Southern California for over 25 years',
                'Schedule Consultation': 'Schedule Consultation',
                'Our Services': 'Our Services',
                'Trusted Since 1990': 'Trusted Since 1990',
                'Family-owned business providing personalized immigration solutions': 'Family-owned business providing personalized immigration solutions',
                
                // Home Message Section
                'Welcome to OJIS, Inc.': 'Welcome to OJIS, Inc.',
                'Founder & Principal Consultant': 'Founder & Principal Consultant',
                
                // Services
                'US Citizenship Applications': 'US Citizenship Applications',
                'Complete assistance with naturalization process, form preparation, and application submission.': 'Complete assistance with naturalization process, form preparation, and application submission.',
                'Green Card Renewal': 'Green Card Renewal',
                'Professional help with legal permanent residency renewals and replacements.': 'Professional help with legal permanent residency renewals and replacements.',
                'Immigration Consulting': 'Immigration Consulting',
                'Expert guidance on immigration matters with personalized solutions for your case.': 'Expert guidance on immigration matters with personalized solutions for your case.',
                
                // About
                'About Us': 'About Us',
                'Years of Experience': 'Years of Experience',
                'Referral Clients': 'Referral Clients',
                'Satisfied Clients': 'Satisfied Clients',
                
                // Team
                'Our Team': 'Our Team',
                'Meet our experienced family team dedicated to helping you achieve your immigration goals': 'Meet our experienced family team dedicated to helping you achieve your immigration goals',
                'Founder & Principal Consultant': 'Founder & Principal Consultant',
                'With over 25 years of experience, Maria founded OJIS, Inc. in 1990 and has been the driving force behind our commitment to exceptional service.': 'With over 25 years of experience, Maria founded OJIS, Inc. in 1990 and has been the driving force behind our commitment to exceptional service.',
                'Immigration Specialist': 'Immigration Specialist',
                'Felipe brings expertise in complex immigration cases and ensures each client receives personalized attention and professional guidance.': 'Felipe brings expertise in complex immigration cases and ensures each client receives personalized attention and professional guidance.',
                'Client Relations Manager': 'Client Relations Manager',
                'Josh manages client relationships and ensures smooth communication throughout the immigration process with modern technology and personal care.': 'Josh manages client relationships and ensures smooth communication throughout the immigration process with modern technology and personal care.',
                
                // Contact
                'Contact Us': 'Contact Us',
                'Visit Our Office': 'Visit Our Office',
                'Southeast corner of Grand Ave. and Cienega Ave.': 'Southeast corner of Grand Ave. and Cienega Ave.',
                'Office Hours': 'Office Hours',
                'Mon, Tue, Thu, Fri:': 'Mon, Tue, Thu, Fri:',
                'Saturday:': 'Saturday:',
                'Wednesday & Sunday:': 'Wednesday & Sunday:',
                'Closed': 'Closed',
                'Schedule Appointment': 'Schedule Appointment',
                'Please call our office to schedule an appointment with us.': 'Please call our office to schedule an appointment with us.',
                'We will listen to your concerns, answer all your questions, and expertly guide you.': 'We will listen to your concerns, answer all your questions, and expertly guide you.',
                'Ready to Get Started?': 'Ready to Get Started?',
                'Contact us today to discuss your immigration needs and let our experienced team help you achieve your goals.': 'Contact us today to discuss your immigration needs and let our experienced team help you achieve your goals.',
                'Call Now': 'Call Now',
                
                // Footer
                'Professional Immigration Consulting Services': 'Professional Immigration Consulting Services',
                'Contact Information': 'Contact Information',
                'Business Hours': 'Business Hours',
                'Mon-Tue, Thu-Fri: 9am-5pm': 'Mon-Tue, Thu-Fri: 9am-5pm',
                'Saturday: 8am-2pm': 'Saturday: 8am-2pm',
                'All rights reserved.': 'All rights reserved.'
            },
            es: {
                // Navigation
                'Home': 'Inicio',
                'About Us': 'Acerca de Nosotros',
                'Services': 'Servicios',
                'Our Team': 'Nuestro Equipo',
                'Contact': 'Contacto',
                
                // Hero Section
                'Professional Immigration Consulting Services': 'Servicios Profesionales de Consultoría Migratoria',
                'Serving the Latino community in Southern California for over 25 years': 'Sirviendo a la comunidad Latina en el Sur de California por más de 25 años',
                'Schedule Consultation': 'Programar Consulta',
                'Our Services': 'Nuestros Servicios',
                'Trusted Since 1990': 'Confiables Desde 1990',
                'Family-owned business providing personalized immigration solutions': 'Negocio familiar brindando soluciones migratorias personalizadas',
                
                // Home Message Section
                'Welcome to OJIS, Inc.': 'Bienvenidos a OJIS, Inc.',
                'Founder & Principal Consultant': 'Fundadora y Consultora Principal',
                
                // Services
                'US Citizenship Applications': 'Solicitudes de Ciudadanía Estadounidense',
                'Complete assistance with naturalization process, form preparation, and application submission.': 'Asistencia completa con el proceso de naturalización, preparación de formularios y envío de solicitudes.',
                'Green Card Renewal': 'Renovación de Tarjeta Verde',
                'Professional help with legal permanent residency renewals and replacements.': 'Ayuda profesional con renovaciones y reemplazos de residencia permanente legal.',
                'Immigration Consulting': 'Consultoría Migratoria',
                'Expert guidance on immigration matters with personalized solutions for your case.': 'Orientación experta en asuntos migratorios con soluciones personalizadas para su caso.',
                
                // About
                'About Us': 'Acerca de Nosotros',
                'Years of Experience': 'Años de Experiencia',
                'Referral Clients': 'Clientes Referidos',
                'Satisfied Clients': 'Clientes Satisfechos',
                
                // Team
                'Our Team': 'Nuestro Equipo',
                'Meet our experienced family team dedicated to helping you achieve your immigration goals': 'Conozca a nuestro experimentado equipo familiar dedicado a ayudarle a lograr sus objetivos migratorios',
                'Founder & Principal Consultant': 'Fundadora y Consultora Principal',
                'With over 25 years of experience, Maria founded OJIS, Inc. in 1990 and has been the driving force behind our commitment to exceptional service.': 'Con más de 25 años de experiencia, María fundó OJIS, Inc. en 1990 y ha sido la fuerza impulsora detrás de nuestro compromiso con el servicio excepcional.',
                'Immigration Specialist': 'Especialista en Inmigración',
                'Felipe brings expertise in complex immigration cases and ensures each client receives personalized attention and professional guidance.': 'Felipe aporta experiencia en casos de inmigración complejos y garantiza que cada cliente reciba atención personalizada y orientación profesional.',
                'Client Relations Manager': 'Gerente de Relaciones con Clientes',
                'Josh manages client relationships and ensures smooth communication throughout the immigration process with modern technology and personal care.': 'Josh gestiona las relaciones con los clientes y garantiza una comunicación fluida durante todo el proceso de inmigración con tecnología moderna y cuidado personal.',
                
                // Contact
                'Contact Us': 'Contáctanos',
                'Visit Our Office': 'Visita Nuestra Oficina',
                'Southeast corner of Grand Ave. and Cienega Ave.': 'Esquina sureste de Grand Ave. y Cienega Ave.',
                'Office Hours': 'Horario de Oficina',
                'Mon, Tue, Thu, Fri:': 'Lun, Mar, Jue, Vie:',
                'Saturday:': 'Sábado:',
                'Wednesday & Sunday:': 'Miércoles y Domingo:',
                'Closed': 'Cerrado',
                'Schedule Appointment': 'Programar Cita',
                'Please call our office to schedule an appointment with us.': 'Por favor llame a nuestra oficina para programar una cita con nosotros.',
                'We will listen to your concerns, answer all your questions, and expertly guide you.': 'Escucharemos sus inquietudes, responderemos todas sus preguntas y lo guiaremos expertamente.',
                'Ready to Get Started?': '¿Listo para Comenzar?',
                'Contact us today to discuss your immigration needs and let our experienced team help you achieve your goals.': 'Contáctenos hoy para discutir sus necesidades de inmigración y permita que nuestro equipo experimentado le ayude a lograr sus objetivos.',
                'Call Now': 'Llamar Ahora',
                
                // Footer
                'Professional Immigration Consulting Services': 'Servicios Profesionales de Consultoría Migratoria',
                'Contact Information': 'Información de Contacto',
                'Business Hours': 'Horario de Atención',
                'Mon-Tue, Thu-Fri: 9am-5pm': 'Lun-Mar, Jue-Vie: 9am-5pm',
                'Saturday: 8am-2pm': 'Sábado: 8am-2pm',
                'All rights reserved.': 'Todos los derechos reservados.'
            }
        };
        
        this.init();
    }
    
    init() {
        // Initialize language buttons
        this.setupLanguageButtons();
        
        // Initialize mobile menu
        this.setupMobileMenu();
        
        // Initialize smooth scrolling
        this.setupSmoothScrolling();
        
        // Initialize header scroll effect
        this.setupHeaderScroll();
        
        // Set default language
        this.setLanguage('es');
    }
    
    setupLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const language = e.target.dataset.lang;
                this.setLanguage(language);
                
                // Update active button
                langButtons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }
    
    setLanguage(language) {
        this.currentLanguage = language;
        document.documentElement.lang = language;
        
        // Update all translatable elements
        const elements = document.querySelectorAll('[data-en], [data-es]');
        elements.forEach(element => {
            const text = element.dataset[language];
            if (text) {
                element.textContent = text;
            }
        });
        
        // Handle home message language switching
        const messageSpanish = document.querySelector('.message-spanish');
        const messageEnglish = document.querySelector('.message-english');
        
        if (messageSpanish && messageEnglish) {
            if (language === 'es') {
                messageSpanish.style.display = 'block';
                messageEnglish.style.display = 'none';
            } else {
                messageSpanish.style.display = 'none';
                messageEnglish.style.display = 'block';
            }
        }
        
        // Store language preference
        localStorage.setItem('preferredLanguage', language);
    }
    
    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking on a link
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }
    
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    setupHeaderScroll() {
        const header = document.querySelector('.header');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    // Initialize intersection observer for animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.service-card, .team-member, .info-card, .stat');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Contact form functionality (if needed in the future)
class ContactManager {
    constructor() {
        this.setupContactForm();
    }
    
    setupContactForm() {
        // Phone number formatting
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        phoneInputs.forEach(input => {
            input.addEventListener('input', this.formatPhoneNumber);
        });
    }
    
    formatPhoneNumber(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{3})(\d{3})/, '($1) $2');
        }
        e.target.value = value;
    }
}

// Accessibility enhancements
class AccessibilityManager {
    constructor() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupScreenReaderSupport();
    }
    
    setupKeyboardNavigation() {
        // Handle keyboard navigation for custom elements
        const interactiveElements = document.querySelectorAll('.lang-btn, .btn, .nav-link');
        
        interactiveElements.forEach(element => {
            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    element.click();
                }
            });
        });
    }
    
    setupFocusManagement() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#home';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1001;
            transition: top 0.3s ease;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    setupScreenReaderSupport() {
        // Add screen reader only text for better context
        const srOnlyStyle = `
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = srOnlyStyle;
        document.head.appendChild(style);
    }
}

// Performance optimization
class PerformanceManager {
    constructor() {
        this.setupLazyLoading();
        this.preloadCriticalImages();
    }
    
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
    
    preloadCriticalImages() {
        const criticalImages = [
            'images/OJIS-WEBSITE-LOGO.jpg'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const languageManager = new LanguageManager();
    const contactManager = new ContactManager();
    const accessibilityManager = new AccessibilityManager();
    const performanceManager = new PerformanceManager();
    
    // Check for saved language preference, default to Spanish
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
    if (savedLanguage === 'en' || savedLanguage === 'es') {
        languageManager.setLanguage(savedLanguage);
        
        // Update active language button
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === savedLanguage);
        });
    }
    
    // Initialize scroll animations after a short delay
    setTimeout(() => {
        languageManager.setupScrollAnimations();
    }, 100);
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    // Close mobile menu if open
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Export for potential future use
window.OJIS = {
    LanguageManager,
    ContactManager,
    AccessibilityManager,
    PerformanceManager
};