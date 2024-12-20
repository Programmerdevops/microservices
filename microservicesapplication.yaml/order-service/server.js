const express = require('express');
const mongoose = require('mongoose');
const Order = require('./models/Order');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongo:27017/orders', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/api/orders/create', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).send(order);
});

app.get('/api/orders/:userId', async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.send(orders);
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
