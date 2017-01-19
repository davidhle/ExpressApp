var express = require("express");
var app = express();

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

//get a blog post with the ID
//e.g., "localhost:3000/api/posts/iaw8743fg3rl92"
app.get('/:id', function(req, res) {
  var id = req.params.id;
  var blogID = inMemoryDB.BlogID[id]

  if(blogID) {
    return res.send(blogID)
  }
  return res.send("There are no blog posts with that ID!");
})

module.exports = app;
