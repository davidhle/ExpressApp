var express = require("express");
var app = express();
var posts = require("./posts.js");

var usersDB = {
  "Author" : {
    "David Le" : 1,
    "Garrett Delfosse" : 1
  }
};

//Get list of all users and their number of posts
//works, but is JSON instead of a list
app.get("/", function(req, res) {
  for (var auth in usersDB) {
    res.send({Success: true, Results: usersDB[auth]});
  }
});

//get a list of all posts by a specified user/Author
app.get("", function(req, res) {

});

//get a list of all users and their number of posts
app.get("", function(req, res) {

});

module.exports = app;
