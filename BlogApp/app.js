var express = require('express');
var bodyParser = require('body-parser');
var posts = require('./routes/posts');
var users = require('./routes/users');
var path = require('path');
var app = express();


app.set('view engine','html');
app.use(express.static(path.join(__dirname, '/client')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components)')));

//global is an "empty" json that allows whatever you
//define it as to be accessible in the routes
global.inMemoryDB = {
  "BlogID" : {
    "iaw8743fg3rl92": {
      "Title": "Free Thai Food in the Office",
      "Body": "One time the interns all went out for Hibachi, and right " +
              "afterwards, there was Thai food being offered on the 3rd " +
              "floor. Both of them were free!",
      "Author": "David Le"
    },
    "9p38qhgqirgpq2": {
      "Title": "Free Moe's in the Office",
      "Body": "One time I bought Moe's for lunch and it turns out there was" +
              "free Moe's in the office after I had already bought Moe's",
      "Author": "Garrett Delfosse"
    }
  }
};

global.postCount = {
  "David Le" : 1,
  "Garrett Delfosse" : 1
};

app.use(bodyParser.json()); // for parsing applciation/json

app.use("/api/", require("./routes/api.js"));

app.listen(3000, function() {
  console.log("Blog app running on port 3000!")
})
