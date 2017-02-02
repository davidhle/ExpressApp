var express = require("express");
var app = express();

var DB = {
  "ID": {
    "007": "David"
  }
};

app.get('/:id/:token', function (req, res) {
  // Some DB call
  var id = req.params.id;
  var token = req.params.token;

  return res.send("You got GET: Here's your token!: "+ token + " And here's your ID: " + id);
});

app.get('/:id', function(req, res){
  // Some DB call
  console.log(DB);
  var id = req.params.id;
  var name = DB.ID[id]; // "" , "David", true , ...
  if (name){
    return res.send("Hello " + id + ", your name is " + name + "!");
  }
  return res.send("You aren't in my database!");
});

app.post('/', function(req, res){
// {
//   Body: {
//     ID: "string",
//     Name: "string"
//   }
// }
  var body = req.body;
  var id = body.ID;
  var name = body.Name;
  if (id in DB.ID){
    return res.send({Success: false, Error: "This name is already taken!"});
  }
  DB.ID[id] = name;
  return res.send({Success: true, Message: "Registration was successful!"});
  console.log(DB);
});




module.exports = app;
