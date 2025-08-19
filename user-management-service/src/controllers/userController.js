const UserService = require('../services/userService');

// Example: Register user
const registerUser = async (req, res) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Example: Login user
const loginUser = async (req, res) => {
  try {
    const token = await UserService.login(req.body);
    res.json({ success: true, token });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

// Example: Get current user
const getMe = async (req, res) => {
  res.json({ success: true, user: req.user });
};

// Example: Update current user
const updateMe = async (req, res) => {
  try {
    const updatedUser = await UserService.updateUser(req.user.id, req.body);
    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  updateMe
};