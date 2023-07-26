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
  try {
    // get a scenario to see which choices, next scenario, and ending it is linked to if applicable
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get single choice by ID
const getSingleAlaraChoice = async (req, res) => {
  try {
    // get a single choice to see which next scenario, scenario, and ending it is linked to if applicable
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get single ending by ID
const getSingleAlaraEnding = async (req, res) => {
  try {
    // get an ending to see which choices, next scenario, and scenario it is linked to if applicable
    res.status(200).json();
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






