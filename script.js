// Apply white theme by default
document.addEventListener('DOMContentLoaded', function() {
    // Apply white theme immediately
    applyWhiteTheme();
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (mainNav.classList.contains('mobile-hidden')) {
                mainNav.classList.remove('mobile-hidden');
                mainNav.classList.add('mobile-open');
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                mainNav.classList.add('mobile-hidden');
                mainNav.classList.remove('mobile-open');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.header') && mainNav.classList.contains('mobile-open')) {
                mainNav.classList.add('mobile-hidden');
                mainNav.classList.remove('mobile-open');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when window is resized to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mainNav.classList.remove('mobile-hidden', 'mobile-open');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            } else {
                if (!mainNav.classList.contains('mobile-open')) {
                    mainNav.classList.add('mobile-hidden');
                }
            }
        });
    }
    
    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-bar input');
    
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            // Add search functionality here
        }
    });
    
    // Enter key search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
    
    // Category hover effects
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log('Category selected:', this.textContent);
            // Add category selection functionality here
        });
    });
    
    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Deal items click
    const dealItems = document.querySelectorAll('.deal-item');
    dealItems.forEach(item => {
        item.addEventListener('click', function() {
            const productName = this.querySelector('p').textContent;
            console.log('Deal item clicked:', productName);
            // Add deal item functionality here
        });
    });
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = newsletterForm.querySelector('input');
    const newsletterBtn = newsletterForm.querySelector('button');
    
    newsletterBtn.addEventListener('click', function() {
        const email = newsletterInput.value.trim();
        if (email && isValidEmail(email)) {
            console.log('Newsletter subscription:', email);
            alert('Thank you for subscribing!');
            newsletterInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
    
    // Quote form submission
    const quoteForm = document.querySelector('.quote-form');
    const sendInquiryBtn = quoteForm.querySelector('.send-inquiry-btn');
    
    sendInquiryBtn.addEventListener('click', function() {
        const itemNeeded = quoteForm.querySelector('input[placeholder="What item you need?"]').value;
        const details = quoteForm.querySelector('textarea').value;
        const quantity = quoteForm.querySelector('input[type="number"]').value;
        
        if (itemNeeded.trim()) {
            console.log('Quote request:', { itemNeeded, details, quantity });
            alert('Your inquiry has been sent!');
            // Reset form
            quoteForm.querySelectorAll('input, textarea').forEach(field => field.value = '');
        } else {
            alert('Please specify what item you need.');
        }
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default for anchor links, not actual page links
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
            }
            console.log('Navigation clicked:', this.textContent);
        });
    });
    
    // Timer countdown (demo)
    updateTimer();
    setInterval(updateTimer, 1000);
    
    // Header actions
    const headerActions = document.querySelectorAll('.header-actions > div');
    headerActions.forEach(action => {
        action.addEventListener('click', function() {
            const actionType = this.className || 'action';
            console.log('Header action clicked:', actionType);
            
            // Add specific functionality for each action
            if (actionType.includes('cart')) {
                showCart();
            } else if (actionType.includes('favorites')) {
                showFavorites();
            } else if (actionType.includes('user-menu')) {
                showUserMenu();
            }
        });
    });
    
    // Service cards interaction
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('h4').textContent;
            console.log('Service selected:', serviceName);
        });
    });
    
    // Supplier items interaction
    const supplierItems = document.querySelectorAll('.supplier-item');
    supplierItems.forEach(item => {
        item.addEventListener('click', function() {
            const supplierName = this.querySelector('p').textContent;
            console.log('Supplier selected:', supplierName);
        });
    });
});

// Helper functions

/**
 * Apply white theme to the entire website
 * Sets background to white and text to dark gray by default
 */
function applyWhiteTheme() {
    // Check if theme is already applied
    if (document.getElementById('white-theme-style')) {
        return;
    }
    
    const whiteTheme = document.createElement('style');
    whiteTheme.id = 'white-theme-style';
    whiteTheme.textContent = `
        * {
            background-color: white !important;
            color: #333333 !important;
        }
        
        body, html {
            background-color: white !important;
            color: #333333 !important;
        }
        
        a {
            color: #0066cc !important;
        }
        
        a:hover {
            color: #004499 !important;
        }
        
        button, input[type="button"], .btn {
            background-color: #f0f0f0 !important;
            color: #333333 !important;
            border-color: #cccccc !important;
        }
        
        input, textarea, select {
            background-color: #ffffff !important;
            color: #333333 !important;
            border-color: #cccccc !important;
        }
        
        input::placeholder, textarea::placeholder {
            color: #999999 !important;
        }
    `;
    
    document.head.appendChild(whiteTheme);
    console.log('White theme applied successfully!');
    
    // Save preference to localStorage
    localStorage.setItem('whiteTheme', 'enabled');
}

/**
 * Remove white theme and restore default
 */
function removeWhiteTheme() {
    const themeStyle = document.getElementById('white-theme-style');
    if (themeStyle) {
        themeStyle.remove();
        localStorage.removeItem('whiteTheme');
        console.log('White theme removed!');
    }
}

/**
 * Toggle white theme on/off
 */
function toggleWhiteTheme() {
    if (localStorage.getItem('whiteTheme') === 'enabled') {
        removeWhiteTheme();
    } else {
        applyWhiteTheme();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function updateTimer() {
    const timeUnits = document.querySelectorAll('.time-unit');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    if (timeUnits.length >= 3) {
        timeUnits[0].textContent = hours;
        timeUnits[1].textContent = minutes;
        timeUnits[2].textContent = seconds;
        if (timeUnits[3]) {
            timeUnits[3].textContent = String(now.getMilliseconds()).substr(0, 2);
        }
    }
}

function showCart() {
    alert('Cart functionality would be implemented here');
}

function showFavorites() {
    alert('Favorites functionality would be implemented here');
}

function showUserMenu() {
    alert('User menu functionality would be implemented here');
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.product-card, .service-card, .deal-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
