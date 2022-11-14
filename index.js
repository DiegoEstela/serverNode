const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const users = [
  {email: "diego@gmail.com",
  fullName: "diego estela"},
  {email: "eze@gmail.com",
  fullName: "ezequiel prueba"}
]


app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});

app.get("/file", (req, res) => {
  res.sendFile('public/index.html' , { root : __dirname});
  });


app.get("/users", (req, res) => {
    res.send(users);
  });

  app.get("/users/:id", (req, res) => {
    res.send(id);
  });

app.listen(port, () => {
  console.log("server run on port " + port);
});