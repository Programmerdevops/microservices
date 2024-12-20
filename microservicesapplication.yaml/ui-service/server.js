const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.static('public'));
app.use(express.json());

// Proxy API routes
app.post('/api/users/register', async (req, res) => {
    try {
        const response = await axios.post('http://user-service:3001/api/users/register', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

app.get('/api/inventory', async (req, res) => {
    try {
        const response = await axios.get('http://inventory-service:3002/api/inventory');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching inventory');
    }
});

app.post('/api/orders/create', async (req, res) => {
    try {
        const response = await axios.post('http://order-service:3003/api/orders/create', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error creating order');
    }
});

app.post('/api/notifications/send', async (req, res) => {
    try {
        const response = await axios.post('http://notification-service:3005/api/notifications/send', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error sending notification');
    }
});

app.listen(80, () => console.log('UI service running on port 80'));
