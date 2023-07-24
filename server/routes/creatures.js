const express = require('express');
const router = express.Router();


// Controller
const creaturesController = require('../controllers/creaturesController');

router.get('/creatures', creaturesController.getAllCreatures) // Get all creatures
    .post('/creatures', creaturesController.addCreature); // Add a creature -- aka player will adopt one for their journey

router.get('/creatures/:id', creaturesController.getCreatureById) // Get specific creature
    .put('/creatures/:id', creaturesController.updateCreature) // Update creature information
    .delete('/creatures/:id', creaturesController.deleteCreature); // Delete a creature -- aka send creature back to wild


module.exports = router;
