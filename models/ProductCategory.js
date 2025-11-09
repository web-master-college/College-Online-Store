module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductCategory', {
        productId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'product_id'
        },
        categoryId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'category_id'
        },
    },{
        tableName: 'product_categories',
        timestamps: false
    })

    return ProductCategory;
}