module.exports = (sequelize, DataTypes) => {
    const ProductImages = sequelize.define('ProductImages', {
        productId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'product_id',
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
    },{
        tableName: 'productimages',
        timestamps: false
    })

    return ProductImages;
}