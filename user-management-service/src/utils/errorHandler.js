// src/utils/errorHandler.js
function errorHandler(err, req, res, next) {
  // Basic, human-friendly error response; enrich for real apps
const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err);
  res.status(500).json({ error: 'Something went wrong.' });
};

module.exports = errorHandler;
}

module.exports = errorHandler;