let cart = [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartDisplay();
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>No items in cart</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <p>${item.name} - $${item.price} x ${item.quantity}</p>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            `;
            cartDiv.appendChild(itemDiv);
        });

        
        const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        const totalDiv = document.createElement('div');
        totalDiv.className = 'cart-total';
        totalDiv.innerHTML = <p><strong>Total: $${totalPrice.toFixed(2)}</strong></p>;
        cartDiv.appendChild(totalDiv);
    }
}
