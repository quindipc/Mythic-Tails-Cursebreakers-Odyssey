const knex = require("knex")(require("../knexfile"));

// Get all creatures
const getAllCreatures = async (req, res) => {
  try {
    const creatures = await knex("creatures").select("*");
    res.status(200).json(creatures);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a specific creature by ID
const getCreatureById = async (req, res) => {
  try {
    const creatureId = req.params.id;
    const creature = await knex("creatures").where({ id: creatureId }).first();
    if (!creature) {
      return res.status(404).json({ error: "Creature not found" });
    }
    res.status(200).json(creature);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add a new creature
const addCreature = async (req, res) => {
  try {
    const { type, description, traits } = req.body;
    const newCreature = await knex("creatures").insert({
      type,
      description,
      traits,
    });
    res.status(201).json({ id: newCreature[0], type, description, traits });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update creature information
const updateCreature = async (req, res) => {
  try {
    const creatureId = req.params.id;
    const { type, description, traits } = req.body;
    await knex("creatures")
      .where({ id: creatureId })
      .update({ type, description, traits });
    res.status(200).json({ message: "Creature updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a creature
const deleteCreature = async (req, res) => {
  try {
    const creatureId = req.params.id;
    await knex("creatures").where({ id: creatureId }).del();
    res.status(204).json({ message: "Creature deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllCreatures,
  getCreatureById,
  addCreature,
  updateCreature,
  deleteCreature,
};
