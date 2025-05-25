// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Product Data
const products = [
    {
        id: 1,
        name: "Premium Runner",
        price: 129.99,
        description: "Lightweight running shoes with responsive cushioning for optimal performance.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },

    {
         
        id: 2,
        name: "Classic Sneakers",
        price: 89.99,
        description: "Timeless design meets modern comfort.",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Hiking Boots",
        price: 159.99,
        description: "Durable waterproof boots with superior traction for all your outdoor adventures.",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Casual Loafers",
        price: 79.99,
        description: "Sophisticated slip-ons perfect for both office and weekend wear.",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Basketball High-Tops",
        price: 119.99,
        description: "High-performance basketball shoes with ankle support and responsive cushioning.",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Slip-Resistant Work Shoes",
        price: 99.99,
        description: "Comfortable and safe footwear for professionals who are always on their feet.",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    // Additional Products (7-11)
    {
        id: 7,
        name: "Chelsea Boots",
        price: 149.99, 
        description: "Stylish ankle boots with elastic sides.",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa"
    },
    
     
        
       
    {

    
        id: 11,
        name: "Winter Boots",
        price: 179.99,
        description: "Insulated snow boots for cold climates.",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

// Display Products
const productsContainer = document.getElementById('products-container');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300';
    productCard.innerHTML = `
        <div class="product-image h-48 overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
        </div>
        <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
            <div class="flex justify-between items-center">
                <span class="text-lg font-bold">$${product.price.toFixed(2)}</span>
                <button class="view-details-btn text-orange-500 font-medium" data-id="${product.id}">View Details</button>
            </div>
        </div>
    `;
    productsContainer.appendChild(productCard);
});

// Modal Functionality
const modal = document.getElementById('productModal');
const modalProductTitle = document.getElementById('modalProductTitle');
const modalProductImage = document.getElementById('modalProductImage');
const modalProductDescription = document.getElementById('modalProductDescription');
const modalProductPrice = document.getElementById('modalProductPrice');
const modalClose = document.querySelector('.modal-close');
const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const quantityInput = document.querySelector('.quantity-input');
const addToCartBtn = document.getElementById('addToCart');
const cartCount = document.querySelector('.cart-count');

let currentProduct = null;
let cartItems = 0;

// View Product Details
viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const productId = parseInt(e.target.getAttribute('data-id'));
        currentProduct = products.find(p => p.id === productId);
        
        modalProductTitle.textContent = currentProduct.name;
        modalProductImage.src = currentProduct.image;
        modalProductDescription.textContent = currentProduct.description;
        modalProductPrice.textContent = `$${currentProduct.price.toFixed(2)}`;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });
});

// Close Modal
modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Quantity Controls
incrementBtn.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

decrementBtn.addEventListener('click', () => {
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

// Add to Cart
addToCartBtn.addEventListener('click', () => {
    if (currentProduct) {
        const quantity = parseInt(quantityInput.value);
        cartItems += quantity;
        cartCount.textContent = cartItems;
        
        // Show confirmation (you could enhance this with a toast notification)
        alert(`${quantity} ${currentProduct.name}(s) added to cart!`);
        
        // Close modal
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (emailInput.value) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    }
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});