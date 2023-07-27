const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await knex("users").select("*");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a specific user by ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await knex("users").where({ id: userId }).first();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10)
    // Hash the password
    const user = await User.create({ name, email, hashedPassword });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// User Login
const loginUser = async (req, res) => {
  try {
    const user = await User.findByEmail({ email: req.body.email });
    const match = await bcrypt.compare(req.body.password, user.hashedPassword);

    // Once user authenticated, create encrypted token
    const accessToken = jwt.sign(
      JSON.stringify(user),
      process.env.TOKEN_SECRET,
    );
    if (match) {
      res.json({ accessToken: accessToken });
    } else {
      res.status(403).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// User Logout
// const logoutUser = async (req, res) => {

//   try {

//         } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// Update user information
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, password } = req.body;
    await knex("users").where({ id: userId }).update({ name, email, password });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await knex("users").where({ id: userId }).del();
    res.status(204).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  // logoutUser,
  updateUser,
  deleteUser,
};
