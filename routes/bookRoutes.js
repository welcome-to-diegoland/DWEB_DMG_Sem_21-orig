const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/path', (req, res) => {
  res.send('¡API funcionando!');
});

router.get('/bookList', bookController.listBooks);

router.get('/book/:index', bookController.showBookByIndex);

module.exports = router;
