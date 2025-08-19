const { findByEmail, createUser, updateUser } = require('../services/userService');

async function register(req, res) {
  const { email, password, firstName, lastName } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });
  const existing = await findByEmail(email);
  if (existing) return res.status(400).json({ error: 'Email already registered' });
  const user = await createUser({ email, password, firstName, lastName });
  res.status(201).json({ user });
}

async function getMe(req, res) {
  // Assumes authMiddleware has populated req.user.sub
  const user = await require('../models/userModel').findById(req.user.sub).select('-passwordHash').lean();
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ user });
}

async function updateMe(req, res) {
  const updated = await updateUser(req.user.sub, req.body);
  if (!updated) return res.status(404).json({ error: 'User not found' });
  res.json({ user: updated });
}

module.exports = { register, getMe, updateMe };