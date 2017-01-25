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

var postCount = {
  "David Le" : 1,
  "Garrett Delfosse" : 1
};

module.exports.inMemoryDB = inMemoryDB;

//get an array of all blog posts (like a landing page)
app.get("/", function(req, res){
  var posts = [];
  for (var post in inMemoryDB) {
    console.log(inMemoryDB[post])
    var count = 0;
    posts[posts.length + count] = inMemoryDB[post];
    count++;
  }
  res.send({Success: true, Results: posts});
});

//get a blog post with the ID
//e.g., "localhost:3000/api/posts/iaw8743fg3rl92"
//also get post count when the id parameter is "count"
//e.g., "localhost:3000/api/posts/count"
app.get('/:id', function(req, res) {
  var id = req.params.id;
  var blogID = inMemoryDB.BlogID[id];

  if (id == "count") {
    return res.send(postCount);
  }

  if(blogID) {
    return res.send({Success: true, Results: blogID})
  }
  return res.send({Success: false, Results: blogID, Error: "There are no blog posts with that ID!"});
})

//add a new blog post to the DB
app.post('/', function(req, res) {
  // {
  //   BlogID: {
  //     Title: title
  //     Body: body
  //     Author: author
  //   }
  // }
  var id = uuidV4();
  //what the user enters
  var reqBody = req.body;

  if (id in inMemoryDB.BlogID) {
    return res.send({Success: false, Error: "The ID is not unique"});
  }
  inMemoryDB.BlogID[id] = reqBody;
  if (inMemoryDB.BlogID[id].Author in postCount) {
    postCount[inMemoryDB.BlogID[id].Author]++;
  } else {
    postCount[inMemoryDB.BlogID[id].Author] = 1;
  }
  console.log(postCount[inMemoryDB.BlogID[id].Author]);
  console.log(postCount);
  return res.send({Success: true, Results: inMemoryDB.BlogID[id]});
});

//Edit an existing blog post by supplying the ID &
//a new blog post object
app.put('/:id', function(req,res) {
  var id = req.params.id;
  var reqBody = req.body;
  if (id in inMemoryDB.BlogID) {
    //update blog post
    inMemoryDB.BlogID[id] = reqBody;
    return res.send({Success: true, Results: inMemoryDB.BlogID[id]});
  }
  return res.send({Success: false, Error: "The provided ID is not in the database!"});
});

//return all posts by a specified author/user
app.get('/:firstName/:lastName', function(req, res) {
  var author = req.params.firstName + " " + req.params.lastName;
  var userPosts = {};
  for(var blogID in inMemoryDB.BlogID) {
    if (author == inMemoryDB.BlogID[blogID].Author) {
      userPosts[blogID] = inMemoryDB.BlogID[blogID];
    }
  }
  return res.send(userPosts);
})

module.exports = app;
