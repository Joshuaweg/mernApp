const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const itemSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model('Item', itemSchema,"items");

app.get('/api/items', async (req, res) => {
  const items = await Item.find({});
  res.json(items);
});

app.post('/api/items', async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  const savedItem = await newItem.save();
  res.json(savedItem);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
