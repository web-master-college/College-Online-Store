'use strict';
/** @type {import('sequelize-cli').Migration} */
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('ProductImages', {
      productId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          field: 'product_id',
          primaryKey: true
      },
      url: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
      },

  },{
      indexes: {
          unique: ['product_id', 'url']
      },
      tableName: 'product_images'
  });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductImages');
  }
};