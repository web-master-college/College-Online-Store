module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    },{
        tableName: 'categories',
        timestamp: false
    })

    // Category.associate = (models) => {
    // };

    return Category;
}