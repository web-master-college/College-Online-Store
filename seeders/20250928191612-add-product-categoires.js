'use strict';
const productCategories = require('../data/productCategories.json');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const data = productCategories.map(p =>{
      return {
        product_id: p.productId,
        category_id: p.categoryId
      }
    })

    await queryInterface.bulkInsert('product_categories', data, {});
   
  },

  async down (queryInterface, Sequelize) {
       await queryInterface.bulkDelete('product_categories', null, {});
  }
};
