const express = require("express");

const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(PORT, () => {
  console.log("App started on port 5000");
});
