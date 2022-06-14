const express = require("express");
const path = require("path");
const fs = require("fs");
const hbs = require("hbs");
const app = express();
const port = 3000;

// Set view directory
const staticpath = path.join(__dirname, "/public");
const templatespath = path.join(__dirname, "/templates/views");
const partialspath = path.join(__dirname, "/templates/partials");

// serve static file
app.use(express.static(staticpath));
hbs.registerPartials(partialspath);
// template Engine
app.set("view engine", "hbs");
app.set("views", templatespath);
app.get("/", (req, res) => {
  res.render("index", {});
});
app.get("/contact", (req, res) => {
  res.render("contact", {});
});
app.get("*", (req, res) => {
  res.render("404Error", {
    error: "Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`port listen on ${port}`);
});
