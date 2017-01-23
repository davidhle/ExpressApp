var express = require("express");
var app = express();
var uuidV4 = require('uuid/v4'); //to create random blog IDs

var inMemoryDB = {
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

//get an array of all blog posts (like a landing page)
app.get("/", function(req, res){
  var posts = [];
  for (var post in inMemoryDB) {
    var count = 0;
    posts[posts.length + count] = inMemoryDB[post];
    count++;
  }
  res.send({Success: true, Results: posts});
});

//get a blog post with the ID
//e.g., "localhost:3000/api/posts/iaw8743fg3rl92"
app.get('/:id', function(req, res) {
  var id = req.params.id;
  var blogID = inMemoryDB.BlogID[id]

  if(blogID) {
    return res.send({Success: true, Results: blogID})
  }
  return res.send({Success: false, Results: blogID, Error: "There are no blog posts with that ID!"});
})

//add a new blog post to the DB
app.post('/', function(req, res) {
  // {
  //   ID: {
  //     Title: title
  //     Body: body
  //     Author: author
  //   }
  // }
  var id = req.ID;
  var title = id.Title;
  var body = id.Body;
  var author = id.Author;
});

//Edit an existing blog post by supplying the ID &
//a new blog post object
app.put('/:id', function(req,res) {
  var id = req.params.id;

});

module.exports = app;
