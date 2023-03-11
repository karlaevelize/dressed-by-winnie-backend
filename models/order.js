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
      Order.belongsTo(models.User);
      Order.belongsToMany(models.Product, {
        through: "OrderProduct",
        foreignKey: "orderId",
      });
    }
  }
  Order.init(
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "processing",
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
