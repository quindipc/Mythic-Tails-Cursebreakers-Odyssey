const knex = require("knex")(require("../knexfile"));

// Get all scenarios
const getAllNyxScenarios = async (req, res) => {
  try {
    const nyx_scenarios = await knex("nyx_scenarios").select("*");
    res.status(200).json(nyx_scenarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all choices
const getAllNyxChoices = async (req, res) => {
  try {
    const nyx_choices = await knex("nyx_choices").select("*");
    res.status(200).json(nyx_choices);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all endings
const getAllNyxEndings = async (req, res) => {
  try {
    const nyx_endings = await knex("nyx_endings").select("*");
    res.status(200).json(nyx_endings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get single scenario by ID
const getSingleNyxScenario = async (req, res) => {
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
const getSingleNyxChoice = async (req, res) => {
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
const getSingleNyxEnding = async (req, res) => {
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
  getAllNyxScenarios,
  getAllNyxChoices,
  getAllNyxEndings,
  getSingleNyxScenario,
  getSingleNyxChoice,
  getSingleNyxEnding
};
