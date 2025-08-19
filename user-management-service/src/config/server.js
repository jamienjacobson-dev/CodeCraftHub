const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

// Routes (actual route files are under src/routes)
const userRoutes = require('../routes/userRoutes');
const errorHandler = require('../utils/errorHandler');

function createServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Security headers & parsing
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Basic logging in development
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  // Simple rate limiter to protect the API surface
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
  });
  app.use(limiter);

  // API versioning
  const apiBase = '/api/v1';
  app.use(`${apiBase}`, userRoutes);

  // Global error handler (should be last)
  app.use(errorHandler);

  return { app, PORT };
}

module.exports = { createServer };
module.exports = initServer;