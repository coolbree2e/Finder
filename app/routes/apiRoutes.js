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
    var totDifferences = [];
    console.log("variable for user answers  " + useAns);
    console.log("Is there a photo " + usePhoto);

    // compares the user input to the API to find a match
    for(var i = 0; i < useInput.length; i++) {
      useAns[i] = parseInt(useAns[i]);
    }

for (let apiAns = 0; apiAns < friends.length-1; apiAns++) {
  var totDiff = 0;

console.log("api as a whole " + friends[apiAns].scores);
// checks the user answers with the API
  for (let inputAns = 0; inputAns< 9; inputAns++){
// using the foor loop to check 
    if(useInput.answers[inputAns] != friends[apiAns].scores[inputAns]){
      // console.log(useInput.answers[inputAns],friends[apiAns].scores[inputAns])
      totDiff += 1;
    }
    // keeps track of the diffences between the usser answer and the friends API
    totDifferences.push(totDiff);
  }

}
console.log("---------------");
console.log("what i need to use to find the match  " + totDifferences);
      
        



  })


}