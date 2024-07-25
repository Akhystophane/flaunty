const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);
const emailSchema = new mongoose.Schema({
  email: String,
  date: { type: Date, default: Date.now }
});

const Email = mongoose.model('Email', emailSchema);

app.post('/api/submit-email', async (req, res) => {
  try {
    const newEmail = new Email({ email: req.body.email });
    await newEmail.save();
    res.status(200).json({ message: 'Email saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving email', error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));