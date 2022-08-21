const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();

const { Category, Subcategory, Book } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const subcategories = await Subcategory.findAll({
      include: [
        {
          model: Category, 
          as: 'category',
          attributes: ['categoryId', 'name'],
        }, 
        {
          model: Book, 
          as: 'books',
          attributes: ['bookId', 'title', 'author', 'price', 'edition', 'availability', 'img']
        }
      ],
      attributes: ['subcategoryId', 'name'],
    });
    res.send(subcategories);
  } catch(err) {
    return next(err);
  }
});

router.get('/:subcategoryId', async (req, res, next) => {
  try {
    const subcategoryId = req.params.subcategoryId;
    const subcategories = await Subcategory.findOne({
      where: { 
        subcategoryId 
      }, 
      include: [
        {
          model: Category, 
          as: 'category',
          attributes: ['categoryId', 'name'],
        }, 
        {
          model: Book, 
          as: 'books',
          attributes: ['bookId', 'title', 'author', 'price', 'edition', 'availability', 'img']
        }
      ]
    });
    res.send(subcategories);
  } catch(err) {
    return next(err);
  }
});

module.exports = router;