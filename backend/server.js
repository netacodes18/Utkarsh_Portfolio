const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const portfolioRoutes = require('./routes/portfolio');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let isDbConnected = false;

// Attempt MongoDB Connection if MONGO_URI is provided
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    isDbConnected = true;
    console.log('Successfully connected to MongoDB.');
  }).catch((err) => {
    console.warn('MongoDB connection failed. Operating in local JSON fallback mode.', err.message);
  });
} else {
  console.log('No MONGO_URI found in environment. Operating in local JSON fallback mode.');
}

// Middleware to pass DB state to routes
app.use((req, res, next) => {
  req.isDbConnected = isDbConnected;
  next();
});

// Routes
app.use('/api', portfolioRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', dbConnected: isDbConnected });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

module.exports = app;
