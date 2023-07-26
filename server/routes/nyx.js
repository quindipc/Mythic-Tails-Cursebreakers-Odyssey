const express = require('express');
const router = express.Router();

// Controller
const nyxController = require('../controllers/nyxController.js');

// Get all scenarios http://localhost:8080/api/nyx/nyx_scenarios
router.get("/nyx_scenarios", nyxController.getAllNyxScenarios);

// Get all choices http://localhost:8080/api/nyx/nyx_choices
router.get("/nyx_choices", nyxController.getAllNyxChoices);

// Get all endings http://localhost:8080/api/nyx/nyx_endings
router.get("/nyx_endings", nyxController.getAllNyxEndings);

// Get single scenario by ID http://localhost:8080/api/nyx/nyx_scenarios/1
router.get("/nyx_scenarios/:id", nyxController.getSingleNyxScenario);

// Get single choice by ID http://localhost:8080/api/nyx/nyx_choice/1
router.get("/nyx_choices/:id", nyxController.getSingleNyxChoice);

// Get single ending by ID http://localhost:8080/api/nyx/nyx_endings/1
router.get("/nyx_endings/:id", nyxController.getSingleNyxEnding);

module.exports = router;
