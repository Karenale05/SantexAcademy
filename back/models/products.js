const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      
    }
  }
  Products.init({
    idUsuario: DataTypes.INTEGER,
    idTipoProducto: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    detalles: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    envio: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Products',
  });
/*
  Products.associate = function(models) {
    Products.belongsTo(models.User, {
      foreignKey: 'idUsuario',
      as: 'User'
    });
  }
*/
  return Products;
};
