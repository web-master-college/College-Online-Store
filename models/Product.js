module.exports = (sequelize, DataTypes) => {
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
            allowNull: false,
            type: DataTypes.INTEGER
        },
        discount: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        sku:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        stock:{
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at'
        }

    })

    return Product;
}