const express = require("express");
const app = express();
const port = 8000;


app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});


app.listen(port, () => {
  console.log("server run on port " + port);
});