const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT
const CORS_ORIGIN = process.env.CORS_ORIGIN

// Allow access
app.use(cors());

// Parse JSON Data
app.use(express.json())

// Routes
const usersRoutes = require('./routes/users');
const creaturesRoutes = require('./routes/creatures');

// Middleware
app.use('/api/users', usersRoutes);
app.use('/api/creatures', creaturesRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});

