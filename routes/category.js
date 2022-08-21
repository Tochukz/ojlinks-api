const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();

const { Category, Subcategory } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      attributes: ['categoryId', 'name'],
      include: [
        {
          model: Subcategory, 
          as: 'subcategories',
          attributes: ['subcategoryId', 'name']
        }
      ]
    });
    const sub = await categories[0].getSubcategories();
    res.send(categories);
  } catch(err) {
    return next(err);
  }
});

router.get('/:categoryId', async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findOne({ 
      where: { 
        categoryId 
      }, 
      attributes: ['categoryId', 'name'],
      include: [
        {
          model: Subcategory, 
          as: 'subcategories',
          attributes: ['subcategoryId', 'name']
        }
      ]
    });
    res.send(category);
  } catch(err) {
    return next(err);
  }
});

module.exports = router;