const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Message = require('../models/Message');

const dataFilePath = path.join(__dirname, '../data/initialData.json');

// Helper to read local JSON data
const getLocalData = () => {
  try {
    const rawData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(rawData);
  } catch (err) {
    console.error('Error reading local portfolio data:', err);
    return {};
  }
};

// Helper to write local JSON data
const saveLocalData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error saving local portfolio data:', err);
    return false;
  }
};

// Memory fallback for messages if DB is not connected
const localMessages = [];

// GET Portfolio Data
router.get('/portfolio', (req, res) => {
  const data = getLocalData();
  res.json({ success: true, data });
});

// POST Update Portfolio Data (Admin / Resume Update)
router.post('/portfolio', (req, res) => {
  const newData = req.body;
  if (!newData) {
    return res.status(400).json({ success: false, message: 'Invalid payload' });
  }
  const saved = saveLocalData(newData);
  if (saved) {
    return res.json({ success: true, message: 'Portfolio data updated successfully', data: newData });
  } else {
    return res.status(500).json({ success: false, message: 'Failed to write updated portfolio data' });
  }
});

// POST Contact Message
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
    }

    const newMessage = {
      name,
      email,
      subject: subject || 'Portfolio Contact',
      message,
      createdAt: new Date()
    };

    // Try saving to MongoDB if connected
    if (req.isDbConnected) {
      const doc = new Message(newMessage);
      await doc.save();
    } else {
      localMessages.push(newMessage);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully.'
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    res.status(500).json({ success: false, message: 'Server error while sending message.' });
  }
});

// GET Messages (Admin / Testing)
router.get('/messages', async (req, res) => {
  try {
    if (req.isDbConnected) {
      const messages = await Message.find().sort({ createdAt: -1 });
      return res.json({ success: true, messages });
    } else {
      return res.json({ success: true, messages: localMessages });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving messages' });
  }
});

module.exports = router;
