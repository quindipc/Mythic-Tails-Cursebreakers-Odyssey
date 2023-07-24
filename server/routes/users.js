// routes/users.js
const express = require('express');
const router = express.Router();
const cors = require("cors");

app.use(cors());

// Controller
const usersController = require('../controllers/usersController');

router.get('/users', usersController.getAllUsers) // Get all users
    .post('/users', usersController.createUser); // Create a new user

router.get('/users/:id', usersController.getUserById) // Get specific user
    .put('/users/:id', usersController.updateUser) // Update user information
    .delete('/users/:id', usersController.deleteUser); // Delete a user


module.exports = router;
