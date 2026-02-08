// const { raw } = require('mysql2');
const { Product, ProductImages, Category } = require('../models');
const { Op, sequelize } = require('sequelize');
const LIMIT = 5;
const isEmpty = require('lodash/isEmpty');

const homePage = async (request, response) => {
    const categoryIcons = ['bi-laptop', 'bi-phone-fill', 'bi-pc', 'bi-playstation', 'bi-device-ssd-fill', '',
                           'bi-camera-fill', 'bi-printer-fill', '', 'bi-earbuds', 'bi-plug-fill', 'bi-router-fill',
                           'bi-server', 'bi-display']
    const slides = Math.ceil(categoryIcons.length / 8);
    const count  = 0;
    try {
        const productsData = await Product.findAll({
            include: [{ model: ProductImages, required: false, attributes: ['url'], as: 'images' }] // join
        })
        // const products = productsData.map(p => ({
        //     ...p,
        //     url: p['images.url']
        // }))
        const products = productsData.map(p => ({
            ...p['_previousDataValues'],
            url: p['_previousDataValues']['images'][0].url
        }));
        const allCategories = await Category.findAll()
        const categories = allCategories.map(c => c.toJSON()) 
        // console.log('products', products.length);
        response.render('Home', {
            title: 'Ivory Store Homepage',
            products,
            categoryIcons,
            slides,
            count
        });
    }
    catch (err) {
        console.log(err.message);
    }
}

const contactUsPage = (request, response) => {
    const { fullName, phone, email, message } = request.query;

    // const fullName = request.query.fullName;
    // const phone = request.query.phone;
    // const email = request.query.email;
    // const message = request.query.message;
    if (fullName) {
        response.render('Thank-you-page', {
            title: 'We got your message',
            fullName,
            phone,
            email,
            message
        })
    } else {
        response.render('contact-us');
    }
}

const searchPage = async (request, response) => {
    let searchValue = request.query.q;
    const page = request.query.page || 1;
    console.log(searchValue)

    const fullUrl = new URL(request.protocol + '://' + request.get('host') + request.originalUrl);
    fullUrl.searchParams.delete('page');
    const includeQueryString = fullUrl.href.includes('?');


    
    searchValue = decodeURIComponent(searchValue).trim();
    try {
        const {count, rows: allProducts} = await Product.findAndCountAll({
            where: {
                // [Op.and]: [
                //     sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), {
                //         [Op.like]: `%${searchValue.toLowerCase()}%`
                //     })
                // ]
                name: {
                    [Op.like]: `%${searchValue}%`
                },
            },
            include: [{ model: ProductImages, required: false, attributes: ['url'], as: 'images' }],
            order:[ ['price', 'ASC']],
            offset: (page - 1) * LIMIT,
            limit: LIMIT
        })
        const products = allProducts.map(p => p.toJSON());
        // console.log(products)

        const allCategories = await Category.findAll()
        const categories = allCategories.map(c => c.toJSON())
        response.render('Shop-grid', {
            searchValue,
            products,
            categories,
            page,
            totalPages: Math.ceil(count / LIMIT),
            url: fullUrl.toString(),
            includeQueryString
        })

    }
    catch (err) {
        console.log(err.message);
    }

}


module.exports = {
    homePage,
    contactUsPage,
    searchPage
}