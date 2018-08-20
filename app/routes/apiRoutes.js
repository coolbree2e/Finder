var path = require("path");


var friends = require("../data/friends");
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
// puts the user input into the API
  app.post("/api/friends", function (req, res) {
    var user = [];
    var useInput = req.body;
    // console.log("user input" + useInput);
    user.push(useInput);
    friends.push(useInput);

    var useAns = useInput.answers;
    var usePhoto = useInput.photo;
    var matchN = "";
    var matchP = "";
    console.log("variable for user answers  " + useAns);
    console.log("Is there a photo " + usePhoto);

    // compares the user input to the API to find a match

    for (let i = 0; i < friends.length; i++) {
      // puts the user answers into interger
      console.log(JSON.stringify(friends[i].scores));
    }
        // puts the user answers into interger
        for(var i = 0; i < useInput.length; i++) {
          useAns[i] = parseInt(useAns[i]);
        }
        console.log(JSON.stringify(friends[i].scores));
        console.log(useInput.answers[i]);
      
        



  })


}