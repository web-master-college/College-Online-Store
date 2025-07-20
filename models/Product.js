const {sequelize} = require('../utils/database');


module.exports = (sequelizev, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            allowNull: null,
            type: DataTypes.INTEGER
        }

    })

    return Product;
}