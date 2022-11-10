const express = require("express");
const app = express();
const port = process.env.PORT || 8000;



app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});

app.get("/file", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });


app.get("/files", (req, res) => {
    res.send("Bienvenido a mi files");
  });

app.listen(port, () => {
  console.log("server run on port " + port);
});