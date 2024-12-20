const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  tireModel: { type: String, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Inventory', inventorySchema);
