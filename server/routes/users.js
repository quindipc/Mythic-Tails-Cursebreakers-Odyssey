// routes/users.js
const express = require('express');
const router = express.Router();


// Controller
const usersController = require('../controllers/usersController');

router.get('/', usersController.getAllUsers); // Get all users
router.post('/register', usersController.registerUser); // Create a new user
router.post('/login', usersController.loginUser);
// router.post('/logout', usersController.logoutUser);

router.get('/:id', usersController.getUserById) // Get specific user
    .put('/:id', usersController.updateUser) // Update user information
    .delete('/:id', usersController.deleteUser); // Delete a user


module.exports = router;
