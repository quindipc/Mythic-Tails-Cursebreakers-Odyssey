const knex = require("knex")(require("../knexfile"));

// Get all scenarios
const getAllAlaraScenarios = async (req, res) => {
  try {
    const alara_scenarios = await knex("alara_scenarios").select("*");
    res.status(200).json(alara_scenarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all choices
const getAllAlaraChoices = async (req, res) => {
  try {
    const alara_choices = await knex("alara_choices").select("*");
    res.status(200).json(alara_choices);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all endings
const getAllAlaraEndings = async (req, res) => {
  try {
    const alara_endings = await knex("alara_endings").select("*");
    res.status(200).json(alara_endings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get single scenario by ID
const getSingleAlaraScenario = async (req, res) => {
  const scenarioId = req.params.id; // Get the scenario ID from the request parameters
  try {
    const scenario = await knex("alara_scenarios").where("alara_scenario_id", scenarioId).first();
    if (!scenario) {
      return res.status(404).json({ message: "Scenario not found" });
    }
    res.status(200).json(scenario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get single choice by ID
const getSingleAlaraChoice = async (req, res) => {
  const choiceId = req.params.id; // Get the choice ID from the request parameters
  try {
    const choice = await knex("alara_choices").where("alara_choice_id", choiceId).first();
    if (!choice) {
      return res.status(404).json({ message: "Choice not found" });
    }
    res.status(200).json(choice);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get single ending by ID
const getSingleAlaraEnding = async (req, res) => {
  const endingId = req.params.id; // Get the ending ID from the request parameters
  try {
    const ending = await knex("alara_endings").where("alara_ending_id", endingId).first();
    if (!ending) {
      return res.status(404).json({ message: "Ending not found" });
    }
    res.status(200).json(ending);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllAlaraScenarios,
  getAllAlaraChoices,
  getAllAlaraEndings,
  getSingleAlaraScenario,
  getSingleAlaraChoice,
  getSingleAlaraEnding,
};