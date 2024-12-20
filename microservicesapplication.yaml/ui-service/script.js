const BASE_URL_USER = 'http://localhost:3001'; // User Service
const BASE_URL_INVENTORY = 'http://localhost:3002'; // Inventory Service
const BASE_URL_ORDER = 'http://localhost:3003'; // Order Service
const BASE_URL_NOTIFICATION = 'http://localhost:3005'; // Notification Service

async function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const response = await fetch(`${BASE_URL_USER}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email })
    });

    const data = await response.json();
    alert('User registered: ' + JSON.stringify(data));
}

async function fetchInventory() {
    const response = await fetch(`${BASE_URL_INVENTORY}/api/inventory`);
    const inventory = await response.json();
    document.getElementById('inventory').innerText = JSON.stringify(inventory, null, 2);
}

async function createOrder() {
    const userId = document.getElementById('orderUserId').value;
    const tireModel = document.getElementById('tireModel').value;
    const quantity = document.getElementById('quantity').value;

    const response = await fetch(`${BASE_URL_ORDER}/api/orders/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, tireModel, quantity })
    });

    const data = await response.json();
    alert('Order created: ' + JSON.stringify(data));
}

async function sendNotification() {
    const userId = document.getElementById('notificationUserId').value;
    const message = document.getElementById('message').value;

    const response = await fetch(`${BASE_URL_NOTIFICATION}/api/notifications/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, message })
    });

    const data = await response.json();
    alert('Notification sent: ' + JSON.stringify(data));
}
