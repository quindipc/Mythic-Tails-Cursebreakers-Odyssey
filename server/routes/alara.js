const express = require('express');
const router = express.Router();


// Controller
const alaraController = require('../controllers/alaraController.js');

// Get all scenarios http://localhost:8080/api/alara/alara_scenarios
router.get("/alara_scenarios", alaraController.getAllAlaraScenarios);

// Get all choices http://localhost:8080/api/alara/alara_choices
router.get("/alara_choices", alaraController.getAllAlaraChoices);

// Get all endings http://localhost:8080/api/alara/alara_endings
router.get("/alara_endings", alaraController.getAllAlaraEndings);

// Get single scenario by ID http://localhost:8080/api/alara/alara_scenarios/1
router.get("/alara_scenarios/:id", alaraController.getSingleAlaraScenario);

// Get single choice by ID http://localhost:8080/api/alara/alara_choices/1
router.get("/alara_choices/:id", alaraController.getSingleAlaraChoice);

// Get single ending by ID http://localhost:8080/api/alara/alara_endings/1
router.get("/alara_endings/:id", alaraController.getSingleAlaraEnding);



module.exports = router;
