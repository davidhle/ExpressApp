var express = require("express");
var app = express();

app.use("/users", require("./users.js"));

module.exports = app;
