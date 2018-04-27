var path = require("path");

var friendsList = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
  console.log("Friends data");
  res.json(friendsList);
});

app.post("/api/friends", function(req, res) {
  
  var userScores = req.body.scores;
  var scoresArray = [];
  var friendCount = 0;
  var topFriend = 0;

    //loop through all current friends in list
    for(var i=0; i<friendsList.length; i++){
      var scoresDiff = 0;
      //loop through scores to compare friend answers
      for(var j=0; j<userScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(userScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[topFriend]){
        topFriend = i;
      }
    }
    //return top friend data
    var bestFriend = friendsList[topFriend];
    res.json(bestFriend);

    //pushes new submission into the friendsList array
    friendsList.push(req.body);
  });

}