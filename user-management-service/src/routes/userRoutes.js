// src/routes/userRoutes.js
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getMe, updateMe } = require('../controllers/userController');
const router = express.Router();

// Protected routes
router.get('/api/v1/users/me', authMiddleware, getMe);
router.patch('/api/v1/users/me', authMiddleware, updateMe);

const { registerUser, loginUser } = require('../controllers/userController');
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;