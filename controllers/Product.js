

const ProductPage = async (request, response) =>{
    
        response.render('product-details');
}


const showProducts = (request, response) =>{
    response.write('This is products page!');
    response.end();
}



module.exports = {
    ProductPage,
    showProducts
}