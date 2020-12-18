'use strict';
const {Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    static associate(models) {
      models.Subcategory.belongsTo(models.Category, {foreignKey: 'categoryId', sourceKey: 'categoryId'});
      models.Subcategory.hasMany(models.Book, {as: 'Books', foreignKey: 'subcategoryId', sourceKey: 'subcategoryId'});
    }
  };
  Subcategory.init({
    subcategoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subcategory',
  });
  return Subcategory;
};