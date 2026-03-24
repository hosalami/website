const Items = [
    { name: "50 kg Basmati Rice", category: "Rice", price: 55000 },
    { name: "4 x 5 liters Kings Veg. Oil", category: "Oil", price: 70000 },
    { name: "25kg sugar", category: "Sugar", price: 43000 },
    { name: "50kg Gerawa Rice", category: "Rice", price: 53500 },
    { name: "24x 10 sachet Milo", category: "Beverage", price: 40000 }
];

const grid = document.getElementById('item-grid');
const user = localStorage.getItem("username");

if (user) {
    document.getElementById('user-name').innerText = `Welcome, ${user}!`;
} else {
    // If they didn't log in, kick them back to page 1
    window.location.href = "index.html";
}

// 1. Generate the store items
Items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    
    // Create options for 0 to 10 units
    let options = '<option value="0">0 (Select)</option>';
    for(let i=1; i<=10; i++) {
        options += `<option value="${i}">${i}</option>`;
    }

    card.innerHTML = `
        <span class="category-tag">${item.category}</span>
        <h3>${item.name}</h3>
        <p class="price">₦${item.price.toLocaleString()}</p>
        <div class="quantity-selector">
            <label>Qty:</label>
            <select id="qty-${index}" onchange="updateTotal()">
                ${options}
            </select>
        </div>
    `;
    grid.appendChild(card);
});

// 2. Calculate Total
function updateTotal() {
    let grandTotal = 0;
    Items.forEach((item, index) => {
        const qty = document.getElementById(`qty-${index}`).value;
        grandTotal += item.price * qty;
    });
    document.getElementById('grand-total').innerText = grandTotal.toLocaleString();
}

// 3. Simple Checkout Alert
function processOrder() {
    const total = document.getElementById('grand-total').innerText;
    if(total === "0") {
        alert("Please select at least one item!");
    } else {
        alert(`Order confirmed! Total Amount: ₦${total}`);
    }
}