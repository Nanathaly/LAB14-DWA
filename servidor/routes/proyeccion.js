//Rutas proyeccion
const express = require('express');
const router = express.Router();
const proyeccionController = require('../controllers/proyeccionController');

//api/proyecciones
router.post('/', proyeccionController.crearProyeccion);
router.get('/', proyeccionController.obtenerProyeccion);
router.put('/:id', proyeccionController.actualizarProyeccion);
router.get('/generar-pdf', proyeccionController.generarPDF);
router.get('/:id', proyeccionController.verProyeccion);
router.delete('/:id', proyeccionController.eliminarProyeccion);

module.exports = router;