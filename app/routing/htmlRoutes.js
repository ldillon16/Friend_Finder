var path = require("path");
// var express = require("express");
// var bodyParser = require("body-parser");

module.exports = function(app) {
	// var router = express.Router();


app.get("/survey", function(req, res) {
  console.log("survey route");
  res.sendFile(path.join(__dirname, "../public/survey.html"));

});

//redirect to homepage
app.get('*', function(req, res) {
  console.log("home route");
  res.sendFile(path.join(__dirname, "../public/home.html"));
 });

// return router;
}