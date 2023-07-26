const express = require('express');
const router = express.Router();


// Controller
const nyxController = require('../controllers/nyxController.js');

// http://localhost:8080/api/nyx
router.get('/', nyxController.getNyxScenarios) 



module.exports = router;
