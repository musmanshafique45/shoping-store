// Product listing functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterItems = document.querySelectorAll('.filter-item');
    const checkboxes = document.querySelectorAll('.checkbox-item input');
    const radioButtons = document.querySelectorAll('.radio-item input');
    
    // Category filter
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            filterItems.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            console.log('Category selected:', this.textContent);
        });
    });
    
    // Checkbox filters
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const filterType = this.closest('.filter-section').querySelector('h3').textContent;
            const filterValue = this.closest('label').textContent.trim();
            console.log(`${filterType} filter:`, filterValue, this.checked);
        });
    });
    
    // Radio button filters
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            const filterType = this.closest('.filter-section').querySelector('h3').textContent;
            const filterValue = this.closest('label').textContent.trim();
            console.log(`${filterType} selected:`, filterValue);
        });
    });
    
    // Price range functionality
    const priceSliders = document.querySelectorAll('.slider');
    const priceInputs = document.querySelectorAll('.price-inputs input');
    const applyBtn = document.querySelector('.apply-btn');
    
    priceSliders.forEach(slider => {
        slider.addEventListener('input', function() {
            console.log('Price range changed:', this.value);
        });
    });
    
    priceInputs.forEach(input => {
        input.addEventListener('change', function() {
            console.log('Price input changed:', this.value);
        });
    });
    
    applyBtn.addEventListener('click', function() {
        const minPrice = priceInputs[0].value;
        const maxPrice = priceInputs[1].value;
        console.log('Apply price filter:', minPrice, 'to', maxPrice);
    });
    
    // Sort dropdown
    const sortDropdown = document.querySelector('.sort-dropdown');
    sortDropdown.addEventListener('change', function() {
        console.log('Sort by:', this.value);
        // Add sorting logic here
    });
    
    // View toggle
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const productsGrid = document.querySelector('.products-grid');
            if (this.querySelector('.fa-list')) {
                productsGrid.style.gridTemplateColumns = '1fr';
                console.log('List view activated');
            } else {
                productsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                console.log('Grid view activated');
            }
        });
    });
    
    // Wishlist functionality
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#ff4757';
                console.log('Added to wishlist');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '';
                console.log('Removed from wishlist');
            }
        });
    });
    
    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // View details links
    const viewDetailsLinks = document.querySelectorAll('.view-details');
    viewDetailsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Navigate to product detail page
            window.location.href = 'product-detail.html';
        });
    });
    
    // Product card clicks (navigate to detail page)
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on wishlist button
            if (!e.target.closest('.wishlist-btn')) {
                window.location.href = 'product-detail.html';
            }
        });
    });
    
    // Pagination
    const pageButtons = document.querySelectorAll('.page-btn');
    const itemsPerPageSelect = document.querySelector('.items-per-page');
    
    pageButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.disabled && !this.classList.contains('active')) {
                pageButtons.forEach(b => b.classList.remove('active'));
                if (!this.querySelector('i')) {
                    this.classList.add('active');
                }
                console.log('Page changed to:', this.textContent);
            }
        });
    });
    
    itemsPerPageSelect.addEventListener('change', function() {
        console.log('Items per page changed to:', this.value);
    });
    
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
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
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
    
    // Header actions
    const headerActions = document.querySelectorAll('.header-actions > div');
    headerActions.forEach(action => {
        action.addEventListener('click', function() {
            const actionType = this.className || 'action';
            console.log('Header action clicked:', actionType);
        });
    });
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Navigation clicked:', this.textContent);
        });
    });
});

// Helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Filter animation
function animateFilters() {
    const filterSections = document.querySelectorAll('.filter-section');
    filterSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Product cards animation
function animateProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize animations
window.addEventListener('load', function() {
    animateFilters();
    animateProductCards();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});