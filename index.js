const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postrouter = require("./router");
require("dotenv").config();

// middle ware
app.use(express.json());
app.use("/posts", postrouter);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to mongodb");
});

app.get("/", (req, res) => {
  res.send("welcome to app");
});

app.listen(5000, () => {
  console.log("app connected");
});
