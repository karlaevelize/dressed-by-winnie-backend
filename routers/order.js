require("dotenv").config();
const { Router } = require("express");
const nodemailer = require("nodemailer");
const Order = require("../models").Order;
const Product = require("../models").Product;
const OrderProduct = require("../models").OrderProduct;

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const { cart } = req.body;
    const { userInfo } = req.body;

    const { total, quantity } = cart;
    const { email, street, appt, postcode, city, country, message, userId } =
      userInfo;

    const newOrder = await Order.create({
      totalPrice: total,
      totalItems: quantity,
      email: email,
      streetAndNumber: street,
      apartment: appt,
      postcode,
      city,
      country,
      message,
      userId,
    });

    const arrayOfPromises = cart.cart.map(async (item) => {
      const addOrderProducts = await OrderProduct.create({
        orderId: newOrder.id,
        productId: item.id,
        quantity: item.quantity,
        size: item.size,
      });
      return addOrderProducts;
    });

    await Promise.all(arrayOfPromises);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.G_EMAIL,
        pass: process.env.G_PASS,
      },
    });

    const emailMessage = {
      from: '"Dressed By Winnie" <support@dressed-by-winnie.com>',
      to: `${email}`,
      subject: "Order Confirmation",
      text: "Thank you for ordering with us! You should receive your products in 5 days :)",
      // html: "<b>Hello world?</b>",
    };

    transporter.sendMail(emailMessage, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const order = await Order.findByPk(newOrder.id, { include: Product });

    res.send({ message: "Order created!", order });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
