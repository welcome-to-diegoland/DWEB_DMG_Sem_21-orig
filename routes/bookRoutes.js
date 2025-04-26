// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Ruta de prueba
router.get('/path', (req, res) => {
  res.send('¡API funcionando!');
});

// Ruta para listar todos los libros
router.get('/bookList', bookController.listBooks);

// Ruta para mostrar un libro por índice
router.get('/book/:index', bookController.showBookByIndex);

module.exports = router;
