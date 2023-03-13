"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: "userId" });
      Order.belongsToMany(models.Product, {
        through: "OrderProduct",
        foreignKey: "orderId",
      });
    }
  }
  Order.init(
    {
      status: {
        type: DataTypes.ENUM,
        values: ["processing", "accepted", "preparing", "shipped", "arrived"],
        allowNull: false,
        defaultValue: "processing",
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      totalItems: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      streetAndNumber: { type: DataTypes.STRING, allowNull: false },
      apartment: {
        type: DataTypes.STRING,
      },
      postcode: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      country: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
