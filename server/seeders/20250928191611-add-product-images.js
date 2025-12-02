'use strict';
const productImageData = require('../data/productImages.json');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // [{productId: 5, images:['https://...', 'https://...laptop.png' ]}]
    // [{product:5 , url: '...1.png'}, {productId: 5, url: '...2.png'}]

    const data = [];
    for(var item of productImageData){
        const singleProductData = item.images.map(url => ({product_id: item.productId, url}));
        data.push(...singleProductData);
    }

    await queryInterface.bulkInsert('productimages', data, {});
   
  },

  async down (queryInterface, Sequelize) {
       await queryInterface.bulkDelete('productimages', null, {});
  }
};
