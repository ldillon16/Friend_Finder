// require dependecies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express
var app = express();
var PORT = process.env.PORT || 3000;

// middleware for parsing requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// application routes
require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

// Start listening on PORT
app.listen(PORT, function() {
  console.log("Friend Finder is listening on PORT: " + PORT);
});