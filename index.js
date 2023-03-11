const express = require("express");
const { PORT } = require("./config/constants");

const app = express();

app.get("/", (req, res) => {
  res.send("Root");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
