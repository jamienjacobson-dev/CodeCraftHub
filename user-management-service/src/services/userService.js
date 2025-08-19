const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const SALT_ROUNDS = 12;

async function createUser({ email, password, firstName, lastName, roles = ['Learner'] }) {
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  const user = new User({ email, passwordHash, firstName, lastName, roles });
  await user.save();
  const { passwordHash: _, ...safe } = user.toObject();
  return safe;
}

async function findByEmail(email) {
  return User.findOne({ email }).lean();
}

async function updateUser(userId, updates) {
  // whitelist fields for update
  const allowed = ['firstName', 'lastName', 'locale', 'metadata'];
  const payload = {};
  for (const key of Object.keys(updates)) {
    if (allowed.includes(key)) payload[key] = updates[key];
  }
  const user = await User.findByIdAndUpdate(userId, payload, { new: true }).lean();
  const { passwordHash, ...rest } = user || {};
  return rest;
}

const User = require('../models/userModel');

// Function to find user by ID
exports.findUserById = async (userId) => {
  return await User.findById(userId);
};