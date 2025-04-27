const books = require('../models/bookModel');

const listBooks = (req, res) => {
  res.json(books);
};

const showBookByIndex = (req, res) => {
  const index = req.params.index;
  const book = books[index];

  if (book) {
    res.render('book', { book });
  } else {
    res.status(404).send('No se encontró libro!');
  }
};

module.exports = {
  listBooks,
  showBookByIndex
};
