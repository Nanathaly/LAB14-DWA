//Rutas cine
const express = require('express');
const router = express.Router();
const cineController = require('../controllers/cineController');

//api/cines
router.post('/', cineController.crearCine);
router.get('/', cineController.obtenerCine);
router.put('/:id', cineController.actualizarCine);
router.get('/:id', cineController.verCine);
router.delete('/:id', cineController.eliminarCine);

module.exports = router;