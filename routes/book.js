const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();

const { Category, Subcategory, Book } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll({
      include: {
        model: Subcategory, 
        as: 'subcategory',
        attributes: ['subcategoryId', 'name'],
        include: {
          model: Category,
          as: 'category',
          attributes: ['categoryId', 'name'],
        }
      }
    });
    res.send(books);
  } catch(err) {
    return next(err);
  }
});

router.get('/category/:categoryId', async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;

    const books = await Book.findAll({
      include: {
        model: Subcategory, 
        as: 'subcategory',
        attributes: ['subcategoryId', 'name'],
        required: true,
        include: {
          model: Category,
          as: 'category',
          attributes: ['categoryId', 'name'],
          where: {
            categoryId
          },
          required: true,
        }
      }
    });
    res.send(books);
  } catch(err) {
    return next(err);
  }
});

router.get('/random-books', async(req, res, next) => {
  try {
    const count = parseInt(req.query.count) || 10;
    const total = await Book.count();
    const bookIds = [];
    [...Array(count)].forEach(item => {
      const randomId = Math.floor(Math.random()*total);
      bookIds.push(randomId);
    });

    const books = await Book.findAll({ where: {
      bookId: {
        [Op.in]: bookIds
      }
    }});

    return res.json(books);
  } catch(err) {
    return next(err);
  }
});

router.get('/:bookId', async (req, res, next) => {
  try {
    const bookId = req.params.bookId;
    const books = await Book.findOne({
      where: { 
        bookId 
      }, 
      include: [
        {
          model: Subcategory, 
          as: 'subcategory',
          attributes: ['subcategoryId', 'name'],
          include: {
            model: Category,
            as: 'category',
            attributes: ['categoryId', 'name'],
          }
        }
      ]
    });
    res.send(books);
  } catch(err) {
    return next(err);
  }
});

router.post('/order/create', async(req, res, next) => {
  try {
    return res.json(req.body);
  } catch(err) {
    return next(err);
  }
})

module.exports = router;