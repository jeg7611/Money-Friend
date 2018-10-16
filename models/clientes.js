'use strict';
module.exports = (sequelize, DataTypes) => {
  const clientes = sequelize.define('clientes', {
    cedula: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    celular: DataTypes.STRING,
    sucursal: DataTypes.STRING
  }, {});
  clientes.associate = function(models) {
    // associations can be defined here
  };
  return clientes;
};