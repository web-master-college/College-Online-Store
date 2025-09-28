module.exports = (sequelize, DataTypes) => {
    const ProductImages = sequelize.define('ProductImages', {
        productId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'product_id'
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: 'productimages',
        timestamps: false
    })

    return ProductImages;
}