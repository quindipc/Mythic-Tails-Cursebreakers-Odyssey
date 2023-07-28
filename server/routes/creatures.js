const express = require('express');
const router = express.Router();


// Controller
const creaturesController = require('../controllers/creaturesController');

// http://localhost:8080/api/creatures
router.get('/', creaturesController.getAllCreatures) // Get all creatures
    .post('/', creaturesController.addCreature); // Add a creature -- aka player will adopt one for their journey

    
//http://localhost:8080/api/creatures/3
router.get('/:id', creaturesController.getCreatureById) // Get specific creature
    .put('/:id', creaturesController.updateCreature) // Update creature information
    .delete('/:id', creaturesController.deleteCreature); // Delete a creature -- aka send creature back to wild


module.exports = router;
