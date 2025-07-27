const {DataTypes} = require('sequelize');


function getModelInfo(Model) {
 
  const sequelizeMock = { define: (name, attributes, options) => ({ name, attributes, options }) };
  const tempMpdel = Model(sequelizeMock, DataTypes);


  const tableName = tempMpdel.options && tempMpdel.options.tableName
    ? tempMpdel.options.tableName
    : tempMpdel.name + 's';

  return {
    tableName,
    attributes: tempMpdel.attributes
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
    getModelInfo  
}