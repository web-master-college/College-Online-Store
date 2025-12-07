const {Product, ProductImages} = require('../models');

const ProductPage = async (request, response) =>{
    response.render('product-details');
}

const showProducts = (request, response) =>{
    response.write('This is products page!');
    response.end();
}

// API endpoint to get a single product
const getProduct = async (request, response) => {
    try{
        const { productId } = request.params;
        
        const productData = await Product.findOne({
            where: { id: productId },
            raw: true,
            include: [{model: ProductImages, required: false, attributes: ['url'], as: 'images'}]
        });
        
        if (!productData) {
            return response.status(404).json({success: false, error: 'Product not found'});
        }
        
        const product = {
            ...productData,
            url: productData['images.url']
        }

        response.json({success: true, product});
    }catch(err){
        console.log(err.message);
        response.status(500).json({success: false, error: err.message});
    }
}

module.exports = {
    ProductPage,
    showProducts,
    getProduct
}