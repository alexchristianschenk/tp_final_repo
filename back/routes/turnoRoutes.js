const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/turnosController');

// Rutas para los hechizos
router.get('/', turnosController.getTurnos);
// router.get('/:id', hechizoController.getHechizoById);
// router.post('/', turnosController.createTurnos);
// router.put('/:id', hechizoController.updateHechizo);
// router.delete('/:id', turnosController.deleteTurnos);


module.exports = router;
