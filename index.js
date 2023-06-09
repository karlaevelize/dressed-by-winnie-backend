//packages
const express = require("express");
const cors = require("cors");

//constants
const { PORT } = require("./config/constants");

//routers
const productsRouter = require("./routers/products");
const authRouter = require("./routers/auth");
const orderRouter = require("./routers/order");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//test endpoints
app.get("/", async (req, res) => {
  res.send("Root");
});

//routers
app.use("/products", productsRouter);
app.use("/auth", authRouter);
app.use("/orders", orderRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
