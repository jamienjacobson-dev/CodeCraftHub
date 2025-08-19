require('dotenv').config();
// Centralized environment config with basic validation
const REQUIRED_VARS = ["MONGO_URI", "PORT"];
for (const key of REQUIRED_VARS) {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} is required`);
  }
}
module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: parseInt(process.env.PORT, 10) || 3000
};