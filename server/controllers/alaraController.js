const knex = require("knex")(require("../knexfile"));

// Get all scenarios
const getAlaraScenarios = async (req, res) => {
  try {
    const alara_scenarios = await knex("alara_scenarios").select("*");
    res.status(200).json(alara_scenarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all choices
const getAlaraChoices = async (req, res) => {
  try {
    const alara_choices = await knex("alara_choices").select("*");
    res.status(200).json(alara_choices);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all endings
const getAlaraEndings = async (req, res) => {
  try {
    const alara_endings = await knex("alara_endings").select("*");
    res.status(200).json(alara_endings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get linked scenario

// Get linked ending 

module.exports = {
  getAlaraScenarios,
  getAlaraChoices,
  getAlaraEndings,
};
