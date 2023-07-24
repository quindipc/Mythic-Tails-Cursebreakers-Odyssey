// routes/users.js
const express = require('express');
const router = express.Router();


// Controller
const usersController = require('../controllers/usersController');

router.get('/users', usersController.getAllUsers); // Get all users
router.post('/register', usersController.registerUser); // Create a new user
router.post('/login', usersController.loginUser);

router.get('/users/:id', usersController.getUserById) // Get specific user
    .put('/users/:id', usersController.updateUser) // Update user information
    .delete('/users/:id', usersController.deleteUser); // Delete a user


module.exports = router;
