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
  try {
  // get a scenario to see which choices, next scenario, and ending it is linked to if applicable
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get single choice by ID
const getSingleNyxChoice = async (req, res) => {
  try {
    // get a single choice to see which next scenario, scenario, and ending it is linked to if applicable
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get single ending by ID 
const getSingleNyxEnding = async (req, res) => {
  try {
  // get an to see which choices, next scenario, and scenario it is linked to if applicable
    res.status(200).json();
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
