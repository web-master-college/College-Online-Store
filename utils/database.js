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


module.exports = {
    sequelize,
    getModelInfo  
}