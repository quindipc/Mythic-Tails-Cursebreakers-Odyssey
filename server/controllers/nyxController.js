const knex = require("knex")(require("../knexfile"));

// Get all scenarios
const getNyxScenarios = async (req, res) => {
  try {
    const nyx_scenarios = await knex("nyx_scenarios").select("*");
    res.status(200).json(nyx_scenarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all choices
const getNyxChoices = async (req, res) => {
  const nyx_choices = await knex("nyx_choices").select("*");
  res.status(200).json(nyx_choices);
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all endings
const getNyxEndings = async (req, res) => {
  try {
    const nyx_endings = await knex("nyx_endings").select("*");
    res.status(200).json(nyx_endings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get linked scenario

// Get linked ending 

module.exports = {
  getNyxScenarios,
  getNyxChoices,
  getNyxEndings,
};
