const { Router } = require("express");
const Products = require("../models").Product;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Products.findAll();
    res.send(products);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
