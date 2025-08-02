// Product detail page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail image switching
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainProductImage');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image
            mainImage.src = this.src.replace('w=100', 'w=400');
        });
    });
    
    // Tab functionality
    const tabHeaders = document.querySelectorAll('.tab-header');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all headers and panes
            tabHeaders.forEach(h => h.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked header and corresponding pane
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Save for later functionality
    const saveBtn = document.querySelector('.save-btn');
    saveBtn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            this.style.color = '#ff4757';
            this.innerHTML = '<i class="fas fa-heart"></i> Saved';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            this.style.color = '';
            this.innerHTML = '<i class="far fa-heart"></i> Save for later';
        }
    });
    
    // Send inquiry button
    const sendInquiryBtn = document.querySelector('.send-inquiry-btn');
    sendInquiryBtn.addEventListener('click', function() {
        alert('Inquiry sent to supplier!');
        console.log('Send inquiry clicked');
    });
    
    // Seller profile button
    const sellerProfileBtn = document.querySelector('.seller-profile-btn');
    sellerProfileBtn.addEventListener('click', function() {
        console.log('View seller profile clicked');
        // Add navigation to seller profile page
    });
    
    // Shop now button
    const shopNowBtn = document.querySelector('.shop-now-btn');
    shopNowBtn.addEventListener('click', function() {
        console.log('Shop now clicked');
        // Add navigation to shop page
    });
    
    // Related product clicks
    const relatedItems = document.querySelectorAll('.related-item');
    relatedItems.forEach(item => {
        item.addEventListener('click', function() {
            const productName = this.querySelector('p').textContent;
            console.log('Related product clicked:', productName);
            // Add navigation to product detail page
        });
    });
    
    // Recommended product clicks
    const recommendedItems = document.querySelectorAll('.recommended-item');
    recommendedItems.forEach(item => {
        item.addEventListener('click', function() {
            const productName = this.querySelector('p').textContent;
            console.log('Recommended product clicked:', productName);
            // Add navigation to product detail page
        });
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
    
    // Breadcrumb navigation
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Breadcrumb clicked:', this.textContent);
        });
    });
});

// Animation functions
function animateProductImages() {
    const productImages = document.querySelector('.product-images');
    productImages.style.opacity = '0';
    productImages.style.transform = 'translateX(-20px)';
    productImages.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        productImages.style.opacity = '1';
        productImages.style.transform = 'translateX(0)';
    }, 100);
}

function animateProductInfo() {
    const productInfo = document.querySelector('.product-info');
    productInfo.style.opacity = '0';
    productInfo.style.transform = 'translateY(20px)';
    productInfo.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        productInfo.style.opacity = '1';
        productInfo.style.transform = 'translateY(0)';
    }, 200);
}

function animateSupplierInfo() {
    const supplierInfo = document.querySelector('.supplier-info');
    supplierInfo.style.opacity = '0';
    supplierInfo.style.transform = 'translateX(20px)';
    supplierInfo.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        supplierInfo.style.opacity = '1';
        supplierInfo.style.transform = 'translateX(0)';
    }, 300);
}

function animateRecommendedProducts() {
    const recommendedItems = document.querySelectorAll('.recommended-item, .related-item');
    recommendedItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize animations
window.addEventListener('load', function() {
    animateProductImages();
    animateProductInfo();
    animateSupplierInfo();
    animateRecommendedProducts();
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

// Image zoom functionality (optional enhancement)
function addImageZoom() {
    const mainImage = document.getElementById('mainProductImage');
    
    mainImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    mainImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Initialize image zoom
document.addEventListener('DOMContentLoaded', addImageZoom);