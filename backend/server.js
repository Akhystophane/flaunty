const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet()); // Ajoute des en-têtes de sécurité
app.use(cors({
  origin: process.env.FRONTEND_URL // Remplacez par l'URL de votre frontend
}));
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Schéma et modèle Email
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  date: { type: Date, default: Date.now }
});

const Email = mongoose.model('Email', emailSchema);

// Validation basique d'email
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Route pour soumettre un email
app.post('/api/submit-email', async (req, res) => {
  const { email } = req.body;

  if (!email || !validateEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const newEmail = new Email({ email });
    await newEmail.save();
    console.log(`New email registered: ${email}`);
    res.status(201).json({ message: 'Email saved successfully' });
  } catch (error) {
    console.error('Error saving email:', error);
    res.status(500).json({ message: 'Error saving email', error: error.message });
  }
});



// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));