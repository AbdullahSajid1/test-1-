const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postrouter = require("./router");

app.use(express.json());
app.use("/posts", postrouter);

mongoose.connect(
  "mongodb+srv://abdullah-sajid:abdullah@cluster007.jbdkb.mongodb.net/posts?retryWrites=true&w=majority",
  () => {
    console.log("connected to mongodb");
  }
);

app.get("/", (req, res) => {
  res.send("welcome to app");
});

app.listen(5000, () => {
  console.log("app connected");
});
