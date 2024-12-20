const express = require('express');
const mongoose = require('mongoose');
const Notification = require('./models/Notification');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongo:27017/notifications', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/api/notifications/send', async (req, res) => {
  const notification = new Notification(req.body);
  await notification.save();
  res.status(201).send(notification);
});

app.get('/api/notifications/:userId', async (req, res) => {
  const notifications = await Notification.find({ userId: req.params.userId });
  res.send(notifications);
});

app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
