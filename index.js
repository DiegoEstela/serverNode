const express = require("express");
const app = express();
const port = process.env.PORT || 8000;


app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});

app.get("/file", (req, res) => {
    res.sendFile("/index.html");
  });

app.listen(port, () => {
  console.log("server run on port " + port);
});