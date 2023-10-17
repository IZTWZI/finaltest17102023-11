module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Length: DataTypes.STRING,
    Material: DataTypes.STRING,
    Color: DataTypes.STRING,
    Pattern: DataTypes.STRING,
    Brand: DataTypes.STRING,
    Price: DataTypes.STRING
  },)
  User.associate = function (models) { }
  return User
}