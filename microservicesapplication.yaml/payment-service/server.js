const express = require('express');
const mongoose = require('mongoose');
const Payment = require('./models/Payment');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongo:27017/payments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/api/payments/charge', async (req, res) => {
  const payment = new Payment(req.body);
  await payment.save();
  res.status(201).send(payment);
});

app.get('/api/payments/:orderId', async (req, res) => {
  const payment = await Payment.findOne({ orderId: req.params.orderId });
  if (!payment) return res.status(404).send();
  res.send(payment);
});

app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});
