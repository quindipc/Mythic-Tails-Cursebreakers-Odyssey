const knex = require("knex")(require("../knexfile"));

class User {
  static async create(user) {
    try {
      // Insert the user data into the database and return the newly created user's ID
      const [userId] = await knex("users").insert(user);

      // Retrieve the newly created user from the database and return it
      const newUser = await knex("users").where({ id: userId }).first();
      return newUser;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }

  static async findByEmail({ email }) {
    try {
      const user = await knex("users").where({ email }).first();
      return user;
    } catch (error) {
      throw new Error("Failed to find user");
    }
  }
}

module.exports = User;
