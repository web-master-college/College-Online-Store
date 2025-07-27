'use strict';
/** @type {import('sequelize-cli').Migration} */
const Form = require('../models/Form');
const {getModelInfo} = require('../utils/database');

module.exports = {
  async up(queryInterface) {
      const {tableName, attributes} = getModelInfo(Form)
      await queryInterface.createTable(tableName, attributes);
  },
  async down(queryInterface, Sequelize) {

    const {tableName} = getModelInfo(Form);
    await queryInterface.dropTable(tableName);
  }
};