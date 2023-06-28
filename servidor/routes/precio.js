//Rutas precio
const express = require('express');
const router = express.Router();
const precioController = require('../controllers/precioController');

//api/precios
router.post('/', precioController.crearPrecio);
router.get('/', precioController.obtenerPrecio);
router.put('/:id', precioController.actualizarPrecio);
router.get('/:id', precioController.verPrecio);
router.delete('/:id', precioController.eliminarPrecio);

module.exports = router;