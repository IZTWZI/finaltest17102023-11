module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    status: DataTypes.STRING,
    timeOn: DataTypes.STRING,
    timeOff: DataTypes.STRING,
    menuType: DataTypes.STRING,
    services: DataTypes.STRING,
    promotion: DataTypes.STRING
  },)
  Restaurant.associate = function (models) { }
  return Restaurant
}