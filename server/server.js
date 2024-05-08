const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080
const CORS_ORIGIN = process.env.CORS_ORIGIN

// Allow access
app.use(cors({ origin: CORS_ORIGIN }));

// Parse JSON Data
app.use(express.json())

// Routes
const usersRoutes = require('./routes/users');
const creaturesRoutes = require('./routes/creatures');
const nyxRoutes = require('./routes/nyx');
const alaraRoutes = require('./routes/alara');

// Middleware
app.use('/api/users', usersRoutes);
app.use('/api/creatures', creaturesRoutes);
app.use('/api/nyx', nyxRoutes);
app.use('/api/alara', alaraRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});

