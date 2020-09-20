const {Model, INTEGER, STRING, DATE, } = require('sequelize');
const sequelize = require('../database/sequelize');

class Subcategory extends Model {}

Subcategory.init(
    {
        subcategoryId: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },      
        subcategory: {
            type: STRING,
            allowNull: false,
        },
        categoryId: {
            type: INTEGER,
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
    modelName: 'subcategory'
   }
);

module.exports = Subcategory;