var express = require("express");
var app = express();
var posts = require("./posts");

// app.use('/', posts);
// //Get list of all users and their number of posts
// //works, but is JSON instead of a list
// // app.get('/', function(req, res) {
// //   // console.log(postDB);
// //   for (var auth in usersDB) {
// //     res.send({Success: true, Results: usersDB[auth]});
// //   }
// // });

module.exports = app;
