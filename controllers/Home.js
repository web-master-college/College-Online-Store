    const {Product, ProductImages} = require('../models');



const homePage = async (request, response) =>{
    try{
        
    const productsData = await Product.findAll({
        raw: true,
        include: [{model: ProductImages, required: false, attributes: ['url'], as: 'images'}]
    });
    const products = productsData.map(p => ({
        ...p,
        url: p['images.url']
    }))



    response.render('Home', {
        title: 'Ivory Store Homepage',
        products
    });

}catch(err){
    console.log(err.message);
}
}

const contactUsPage = (request, response) =>{
      response.render('contact-us');
}

const contactUsPageAPI = (request, response) =>{
    const {fullName, phone, email, message} = request.query;

    response.json({fullName, phone, email, message, success: true});
}



module.exports = {
    homePage,
    contactUsPage,
    contactUsPageAPI
}