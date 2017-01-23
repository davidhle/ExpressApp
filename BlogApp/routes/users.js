var express = require("express");
var app = express();
var posts = require("./posts.js");
var postDB = posts.inMemoryDB;

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
app.get("/:author", function(req, res) {
  console.log(postDB);
  var author = req.params.author;
  console.log(author);
  var authorPosts = [];
  for (var id in postDB) {
    var count = 0;
    if (id.author.replace(/\s+/g, '') == author) {
      authorPosts[count] = id;
      count++;
    }
  }
  res.send(authorPosts);
});

module.exports = app;
