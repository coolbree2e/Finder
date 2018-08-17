// sets up the server

var express = require('express')
var app = express()
// app.use(express.static("public"));
var bodyParser = require('body-parser')

var PORT = process.env.PORT || 8080;




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

require("./app/routes/htmlRoutes")(app);
require("./app/routes/apiRoutes")(app);

// checks to see if the server is running fine
app.listen(PORT, function(){
    console.log("It's working on PORT : " + PORT) ;
});

