// routes/users.js
const express = require('express');
const router = express.Router();


// Controller
const usersController = require('../controllers/usersController');

// http://localhost:8080/api/users
router.get('/', usersController.getAllUsers); // Get all users
// http://localhost:8080/api/users/register
router.post('/register', usersController.registerUser); // Create a new user
// http://localhost:8080/api/users/login
router.post('/login', usersController.loginUser); // User login

// http://localhost:8080/api/users/3
router.get('/:id', usersController.getUserById) // Get specific user
    .put('/:id', usersController.updateUser) // Update user information
    .delete('/:id', usersController.deleteUser); // Delete a user


module.exports = router;
