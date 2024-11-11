let orders = [];


function addOrder() {
    const name = document.getElementById('customer-name').value;
    const item = document.getElementById('order-item').value;
    const status = document.getElementById('delivery-status').value;

    if (name && item) {
        const newOrder = {
            id: Date.now(),
            name,
            item,
            status
        };
        orders.push(newOrder);
        updateOrderList();
        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
}


function clearForm() {
    document.getElementById('customer-name').value = '';
    document.getElementById('order-item').value = '';
    document.getElementById('delivery-status').value = 'Pending';
}


function updateStatus(orderId, newStatus) {
    const order = orders.find(order => order.id === orderId);
    if (order) {
        order.status = newStatus;
        updateOrderList();
    }
}

function updateOrderList() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';

    if (orders.length === 0) {
        orderList.innerHTML = '<p>No orders found</p>';
    } else {
        orders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'order';
            orderDiv.innerHTML = `
                <p><strong>Customer:</strong> ${order.name}</p>
                <p><strong>Item:</strong> ${order.item}</p>
                <p><strong>Status:</strong> <span class="order-status ${order.status.toLowerCase()}">${order.status}</span></p>
                <select onchange="updateStatus(${order.id}, this.value)">
                    <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                    <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                </select>
            `;
            orderList.appendChild(orderDiv);
        });
    }
}