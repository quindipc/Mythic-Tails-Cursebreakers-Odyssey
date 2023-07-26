const express = require('express');
const router = express.Router();


// Controller
const alaraController = require('../controllers/alaraController.js');

// http://localhost:8080/api/alara
router.get('/', alaraController.getAlaraScenarios) 



module.exports = router;
