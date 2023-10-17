module.exports = (sequelize, DataTypes) => {
  const Short = sequelize.define('Short', {
    Length: DataTypes.STRING,
    Material: DataTypes.STRING,
    Color: DataTypes.STRING,
    Pattern: DataTypes.STRING,
    Brand: DataTypes.STRING,
    Price: DataTypes.STRING
  },)
  Short.associate = function (models) { }
  return Short
}