"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      admin: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
      streetAndNumber: { type: DataTypes.STRING },
      postcode: { type: DataTypes.STRING },
      city: { type: DataTypes.STRING },
      country: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
