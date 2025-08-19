const mongoose = require('mongoose');

async function connect(uri, options = {}) {
  // If already connected, skip reconnect
  if (mongoose.connection.readyState === 1) return;
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ...options
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error', err);
    throw err;
  }
}

module.exports = { connect };
