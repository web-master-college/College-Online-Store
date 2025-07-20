const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const env = process.env.NODE_ENV || "development"; // "development" , "test", "production"


const {password, username, database} = config[env];

const sequelize = new Sequelize(database, username, password, config[env]);



module.exports = {
    sequelize
}