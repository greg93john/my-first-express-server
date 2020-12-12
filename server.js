const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("contact me at: greg93john@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("I'm a simple developer with wants and needs.");
});

app.listen(3000, () => {console.log("Server started on port 3000");});
