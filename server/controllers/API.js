const {Form, Product, ProductCategories, ProductImages} = require('../models');
const {Op} = require('sequelize');
const _ = require('lodash');

const getOrderBy = (order) =>{
    switch(order){
        case 'low':
            return  [['price', 'ASC']];
        case 'high':
            return [['price', 'DESC']];
        default:    
            return [['price', 'ASC']];
    }
}


const getProductCategories = async (req, res) =>{
    try {
        const {orderBy} = req.query;
        const order = getOrderBy(orderBy);
        const categoryIds = _.split(req.params.categoryId, ',');
        const productData = await Product.findAll({
            include: [
            { model: ProductImages, required: false, attributes: ['url'], as: 'images' },
            {
                model: ProductCategories,
                required: true,
                attributes: [],
                where: {
                    categoryId:{
                        [Op.in]: categoryIds
                    }
                }
            },
            order
            ] // join
        })
        // console.log('productData', productData);
        const products = productData;
        res.json({products});
    }
    catch (err) {
        console.log(err.message);
    }
}


const sendContactForm = async (req, res) => {
    const { from_name: name, email_id: email, message } = req.query;
    try {
        const today = new Date();
        await Form.create({
            name,
            email,
            message,
            createdAt: today,
            updatedAt: today
        });
        res.status(200).json({ message: 'Contact form submitted successfully', success: true });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while submitting the contact form', success: false });
    }

}


module.exports = {
    getProductCategories,
    sendContactForm
}