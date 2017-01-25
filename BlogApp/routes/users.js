var express = require("express");
var app = express();
var posts = require("./posts");

// Get list of all users and their respective number of posts
app.get('/', function(req, res) {
  if (Object.keys(global.postCount).length == 0) {
    return res.send({Success: false, Error: "There are no users or posts yet!"});
  }
  return res.send({Success: true, Results: global.postCount});
});

//Get all posts by a specified author/user
app.get('/:author', function(req, res) {
  var author = req.params.author;
  var userPosts = {};
  for(var blogID in global.inMemoryDB.BlogID) {
    if (author == global.inMemoryDB.BlogID[blogID].Author) {
      userPosts[blogID] = global.inMemoryDB.BlogID[blogID];
    }
  }
  if (author in global.postCount) {
    return res.send({Success: true, Results: userPosts});
  }
  return res.send({Success: false, Error: "There aren't any posts written by that author!"});
})

module.exports = app;
