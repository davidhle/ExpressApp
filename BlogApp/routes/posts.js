var express = require("express");
var app = express();
var uuidV4 = require('uuid/v4'); //to create random blog IDs

//get an array of all blog posts (like a landing page)
app.get("/", function(req, res){
  var posts = [];
  for (var post in global.inMemoryDB) {
    var count = 0;
    posts[posts.length + count] = global.inMemoryDB[post];
    count++;
  }
  if (Object.keys(global.postCount).length == 0) {
    return res.send({Success: false, Error: "There are no users or posts yet!"});
  }
  res.send({Success: true, Results: posts});
});

//get a blog post with the ID
//e.g., "localhost:3000/api/posts/iaw8743fg3rl92"
app.get('/:id', function(req, res) {
  var id = req.params.id;
  var blogID = global.inMemoryDB.BlogID[id];
  if(blogID) {
    return res.send({Success: true, Results: blogID})
  }
  return res.send({Success: false, Results: blogID, Error: "There are no blog posts with that ID!"});
})

//add a new blog post to the DB
//post body format:
// {
//   BlogID: {
//     Title: title
//     Body: body
//     Author: author
//   }
// }
app.post('/', function(req, res) {
  console.log('Received a POST request')
  var id = uuidV4();
  var reqBody = req.body; //what the user enters
  if (id in global.inMemoryDB.BlogID) {
    return res.send({Success: false, Error: "The ID is not unique"});
  }
  global.inMemoryDB.BlogID[id] = reqBody; //adding the new JSON object to the database
  if (global.inMemoryDB.BlogID[id].Author in global.postCount) {
    global.postCount[global.inMemoryDB.BlogID[id].Author]++;
  } else {
    global.postCount[global.inMemoryDB.BlogID[id].Author] = 1;
  }
  return res.send({Success: true, Results: global.inMemoryDB.BlogID[id]});
});

//Edit an existing blog post by supplying the ID &
//a new blog post object
app.put('/:id', function(req,res) {
  var id = req.params.id;
  var reqBody = req.body;
  if (id in global.inMemoryDB.BlogID) {
    global.inMemoryDB.BlogID[id] = reqBody; //update blog post
    return res.send({Success: true, Results: global.inMemoryDB.BlogID[id]});
  }
  return res.send({Success: false, Error: "The provided ID is not in the database!"});
});

module.exports = app;
