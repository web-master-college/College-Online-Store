'use strict';
/** @type {import('sequelize-cli').Migration} */
const ModelInstance = require('../models/Product');
const {DataTypes, Sequelize} = require('sequelize');

module.exports = {
  async up(queryInterface) {
      const Product = ModelInstance(Sequelize, DataTypes)
      await queryInterface.createTable(Product.getTableName(), Product.getAttributes());
  },
  async down(queryInterface, Sequelize) {
    const Product = ModelInstance(Sequelize, DataTypes);
    await queryInterface.dropTable(Product.getTableName());
  }
};