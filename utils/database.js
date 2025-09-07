
const { DataTypes } = require('sequelize');

function getModelInfo(Model) {
  // Create a mock sequelize object to get the model definition
  const sequelizeMock = {
    define: (name, attributes, options) => {
      return { name, rawAttributes: attributes, options };
    }
  };
  const tempModel = Model(sequelizeMock, DataTypes);

  const tableName = tempModel.options && tempModel.options.tableName
    ? tempModel.options.tableName
    : tempModel.name + 's';

  // Convert model attributes to migration-compatible attributes
  const attributes = {};
  for (const [key, value] of Object.entries(tempModel.rawAttributes)) {
    // Map 'field' to key if present
    const columnName = value.field || key;
    attributes[columnName] = { ...value };
    // Remove 'field' property for migration
    delete attributes[columnName].field;
  }

  return {
    tableName,
    attributes
  };
}

const getModelAttributes = (ModelInstance, Sequelize, DataTypes) => {
 const model = ModelInstance(Sequelize, DataTypes);
  return {
    tableName: model.getTableName(),
    attributes: model.getAttributes()
  }   
}


module.exports = {
    sequelize,
    getModelInfo,
    getModelAttributes
}