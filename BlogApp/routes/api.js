var express = require("express");
var app = express();

app.use("/users/", require("./users.js"));
app.use("/posts/", require("./posts.js"));

module.exports = app;
