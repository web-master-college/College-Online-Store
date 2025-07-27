'use strict';
/** @type {import('sequelize-cli').Migration} */
const {getModelInfo} = require('../utils/database');
const Product = require('../models/Product');


module.exports = {
  async up(queryInterface) {
    const { tableName, attributes } = getModelInfo(Product);
    await queryInterface.createTable(tableName, attributes);
  },
  async down(queryInterface) {
    const { tableName } = getModelInfo(Product);
    await queryInterface.dropTable(tableName);
  }
};