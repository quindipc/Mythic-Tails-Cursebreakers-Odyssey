const knex = require("knex")(require("../knexfile"));

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
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await knex("users").insert({ name, email, password });
    res.status(201).json({ id: newUser[0], name, email });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

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
    res..status(204).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
