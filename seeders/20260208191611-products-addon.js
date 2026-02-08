'use strict';
const productsData = require('../data/newData.json');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const today = new Date();
    const dataToAdd = productsData.reduce((acc, p) => {
    
      acc.images.push({
        product_id: p.product_id,
        url: p.image
      })

      acc.productCategories.push({
        category_id: p.categoryId,
        product_id: p.product_id
      })
      
      acc.products.push({
        id: p.product_id,
        description: p.description,
        name: p.name,
        price: p.price,
        sku: p.product_id,
        stock: p.stock,
        created_at: today,
        updated_at: today
      })

      return acc;

    }, {products: [], images: [], productCategories: []});



    const {products, images, productCategories} =  dataToAdd;


    await queryInterface.bulkInsert('product_categories', productCategories, {});
    await queryInterface.bulkInsert('productimages', images, {});
    await queryInterface.bulkInsert('products', products, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('products', null, {});
  }
};
