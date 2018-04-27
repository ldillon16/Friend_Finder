var path = require("path");
// import friendsList
var friendsList = require("../data/friends.js");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {

  res.json(friendsList);
});

app.post("/api/friends", function(req, res) {
    console.log(friendsList)
    console.log("BODY" + req.body.scores)
  
    var userScores = req.body.scores;
    var scoresArr = [];
    var friendCount = 0;
    var match = 0;


     for(var i=0; i<friendsList.length; i++){
       var diff = 0;

       for(var j=0; j<userScores.length; j++){
         diff += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(userScores[j])));
       }

       scoresArr.push(diff);
     }

     for(var i=0; i<scoresArr.length; i++){
       if(scoresArr[i] <= scoresArr[match]){
         match = i;
       }
     }

     var bestFriend = friendsList[match];
     res.json(bestFriend);

     friendsList.push(req.body);
   });


}