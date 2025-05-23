const products = [
{
id: 1,
name: "iPhone 15 Pro",
price: 999,
category: "phones",
image: "https://via.placeholder.com/300x200/3b82f6/white?text=iPhone+15+Pro",
description: "The latest iPhone with amazing camera and performance"
},
{
id: 2,
name: "MacBook Air",
price: 1199,
category: "laptops",
image: "https://via.placeholder.com/300x200/10b981/white?text=MacBook+Air",
description: "Lightweight laptop perfect for work and creativity"
},
{
id: 3,
name: "AirPods Pro",
price: 249,
category: "accessories",
image: "https://via.placeholder.com/300x200/f59e0b/white?text=AirPods+Pro",
description: "Wireless earbuds with noise cancellation"
},
{
id: 4,
name: "Samsung Galaxy S24",
price: 899,
category: "phones",
image: "https://via.placeholder.com/300x200/8b5cf6/white?text=Galaxy+S24",
description: "Android phone with incredible features"
},
{
id: 5,
name: "Dell Laptop",
price: 799,
category: "laptops",
image: "https://via.placeholder.com/300x200/06b6d4/white?text=Dell+Laptop",
description: "Reliable laptop for everyday computing"
},

{
id: 6,
name: "Wireless Mouse",
price: 49,
category: "accessories",
image: "https://via.placeholder.com/300x200/ec4899/white?text=Wireless+Mouse",
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
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-actions">
                <button class="btn btn-primary btn-small" onclick="addToCart" (${})
            </div>
            </div>
        </div>
    `
}