const express = require("express");
const app = express();
const port = process.env.PORT || 8000;


app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});

app.get("/segundaPrueba", (req, res) => {
    res.send("Bienvenido a mi segundaPrueba");
  });

app.listen(port, () => {
  console.log("server run on port " + port);
});