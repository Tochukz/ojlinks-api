const express = require('express');
const router = express.Router();

const Book = require('../models/Book');
const Category = require('../models/Category');
const Subcategory = require('../models/Subcategory');


router.get('/books', async (req, res, next) => {
  try {
    const books = await Book.findAll();
    return res.send(books);
  } catch(err) {
    return next(err);
  }
});

router.get('/books/:bookId', async (req, res, next) => {
    try {
      const book = await Book.findOne({where: {bookId: req.params.bookId}});
      return res.send(book);
    } catch(err) {
      return next(err);
    }
});

router.get('/categories', async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    return res.send(categories);
  } catch(err) { 
      return next(err);
  }
});

router.get('/Subcategories', async (req, res, next) => {
  try {
    const subcategories = await Subcategory.findAll();
    return res.send(subcategories);
  } catch(err) {
    return next(err);
  }
})

module.exports = router;