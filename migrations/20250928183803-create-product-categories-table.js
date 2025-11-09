'use strict';
/** @type {import('sequelize-cli').Migration} */
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('product_categories', {
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'product_id'
    },
    categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'category_id'
    }
  },{
      indexes: {
          unique: ['product_id', 'category_id']
      },
      tableName: 'product_categories'
  });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product_categories');
  }
};