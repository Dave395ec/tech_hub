const products = [
{
id: 1,
name: "iPhone 15 Pro",
price: 999,
category: "phones",
image: "https://www.istore.co.za/media/catalog/product/cache/7cbfd4bf9761b066f119e95af17e67c5/i/p/iphone_15_pro_black_titanium_pdp_image_position_3.jpg",
description: "The latest iPhone with amazing camera and performance"
},
{
id: 2,
name: "MacBook Air",
price: 1199,
category: "laptops",
image: "https://istorepreowned.co.za/cdn/shop/files/MacBook_Air_M1_2020_-_Space_Grey.png?v=1699424775&width=1000",
description: "Lightweight laptop perfect for work and creativity"
},
{
id: 3,
name: "AirPods Pro",
price: 249,
category: "accessories",
image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX342_SY445_.jpg",
description: "Wireless earbuds with noise cancellation"
},
{
id: 4,
name: "Samsung Galaxy S24",
price: 899,
category: "phones",
image: "https://digitalexperience.co.za/wp-content/uploads/2024/01/SM-S921BZACAFA-z.png",
description: "Android phone with incredible features"
},
{
id: 5,
name: "Dell Laptop",
price: 799,
category: "laptops",
image: "https://m.media-amazon.com/images/I/61cqpaPruDL._AC_SY300_SX300_.jpg",
description: "Reliable laptop for everyday computing"
},

{
id: 6,
name: "Wireless Mouse",
price: 49,
category: "accessories",
image: "https://m.media-amazon.com/images/I/31YQyN3LWvL._SY300_SX300_QL70_ML2_.jpg",
description: "Ergonomic wireless mouse for productivity"
}
];

// Step 2: Creating out shopping cart.
//This wi;; store all items the customer wants to buy.

let cart = [];

// Step 3: Get references to HTML elements
// This connects our JS to soecific parts of our webpage

const cartCountElement = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');

// Step 4: Utility function to format prices
// Make "R999.00" instead of just "999"

function formatPrice(price) {
    return 'R' + price.toFixed(2);
}

console.log('JavaScript loaded successfully!');
console.log('We have', products.length, 'products');

// Function to create HTML for one product card

function createProductCard(product) {
// Template literals (backticks) let us create HTML with JavaScript
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>

                    <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">
                        View Details
                    </button>
                </div>
            </div>
        </div>`
}

// Function to display products on the page
function displayProducts(productsToShow = products) {
    if (productsGrid) {
        console.log('Display products... on products page');
        productsGrid.innerHTML = productsToShow.map(createProductCard).join('');
    }

    if (featuredProducts){
        const featuredHTML = productsToShow.slice(0, 6).map(createProductCard).join('');
        featuredProducts.innerHTML = featuredHTML; 
    }
}

//Function to add products to cart
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}

//Function to view product details
function viewProduct(productId) {
    const product 
        = products.find(prod => prod.id === productId);
    alert('Product: ' + product.name + 
        '\nPrice: ' + formatPrice(product.price) + 
        '\nDescription: ' + product.description);
}

//Function to handle filter button clicks
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        //Remove active from all buttons
        button.addEventListener('click', function(){
            filterButtons.forEach(btn => btn.classList.remove('active'));
        //Add active class to the clicked button
            this.classList.add('active');
        //Get the category from the buttons data-category attribute
            const category = this.getAttribute('data-category');
        
        //Filter products based on category
            let filteredProducts;
            if (category === 'all') {
                filteredProducts = products // Show all products
            } else {
                filteredProducts = products.filter(product => product.category === category);
            }

            displayProducts(filteredProducts);

            console.log('Showing', filteredProducts.length, 'products in category: ', category);
        });
    });
}

//Waiting for the page to load, then display products
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, displaying products...');
    displayProducts();
    setupFilters();
})