const express = require('express');
const mongoose = require('mongoose');
const Inventory = require('./models/Inventory');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongo:27017/inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/inventory', async (req, res) => {
  const inventory = await Inventory.find();
  res.send(inventory);
});

app.post('/api/inventory/add', async (req, res) => {
  const item = new Inventory(req.body);
  await item.save();
  res.status(201).send(item);
});

app.listen(PORT, () => {
  console.log(`Inventory Service running on port ${PORT}`);
});
