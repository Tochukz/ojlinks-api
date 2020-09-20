const {Model, INTEGER, STRING, DATE, } = require('sequelize');
const sequelize = require('../database/sequelize');

class Category extends Model {}

Category.init(
    {
        categoryId: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category: {
            type: STRING,
            allowNull: false,
        },
        createdAt: {
            type: DATE,
        },
        updatedAt: {
            type: DATE,
        },
        deletedAt: {
            type: DATE,
        }
   }, 
   {
    sequelize,
    modelName: 'category'
   }
);

module.exports = Category;