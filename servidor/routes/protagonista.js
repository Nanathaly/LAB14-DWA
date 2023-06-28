//Rutas precio
const express = require('express');
const router = express.Router();
const protagonistaController = require('../controllers/protagonistaController');

//api/precios
router.post('/', protagonistaController.crearProtagonista);
router.get('/', protagonistaController.obtenerProtagonista);
router.put('/:id', protagonistaController.actualizarProtagonista);
router.get('/:id', protagonistaController.verProtagonista);
router.delete('/:id', protagonistaController.eliminarProtagonista);

module.exports = router;