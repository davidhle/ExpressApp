var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json()); // for parsing applciation/json

app.use("/api/", require("./routes/api.js"));

app.listen(3000, function() {
  console.log("Blog app running on port 3000!")
})
