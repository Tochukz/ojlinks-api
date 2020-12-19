'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
class Category extends Model {
    static associate(models) {    
      models.Category.hasMany(models.Subcategory, { as: 'Subcategories', foreignKey: 'categoryId', sourceKey: 'categoryId'});
    }
  };
  Category.init({
    categoryId: {
      type: DataTypes.INTEGER,      
      primaryKey: true,    
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
  });
  return Category;
};