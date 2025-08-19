require('dotenv').config();
const { createServer } = require('./config/server');
const { connect } = require('./config/db');
const env = require('./config/env');
const errorHandler = require('./utils/errorHandler');

(async () => {
	// Connect to DB
	await connect(env.MONGO_URI);

	const { app, PORT } = createServer();
	// Ensure a global error handler exists
	app.use(errorHandler);

	app.listen(PORT, () => {
		console.log(`User Management Service listening on port ${PORT}`);
	});
})();