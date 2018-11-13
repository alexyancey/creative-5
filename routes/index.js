var express = require('express');
var router = express.Router();
/* Set up mongoose in order to connect to mongo database */
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency
var request = require('request');

mongoose.connect('mongodb://localhost/highscore', { useNewUrlParser: true }); //Connects to a mongo database called "commentDB"

var scoreSchema = mongoose.Schema({ //Defines the Schema for this database
  Name: String,
  Score: String
});

var Score = mongoose.model('Score', scoreSchema); //Makes an object from that schema as a model

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
  console.log('Connected');
});

router.post('/questions', function(req, res, next) {
    console.log("POST score route");
    console.log(req.body);
    var newscore = new Score(req.body);
    newscore.save(function(err, result) {
        if (err) { console.log("Got Error"); }
        else {
            console.log("saved worked");
            console.log(result);
            res.sendStatus(200);
        }
    })
});
router.get('/score', function(req, res, next) {
    console.log("In the GET route");
    Score.find(function(err, scoreList) { //Calls the find() method on your database
        if (err) return console.error(err); //If there's an error, print it out
        else {
            console.log(scoreList); //Otherwise console log the comments you found
            res.json(scoreList); //Then send the comments
        }
    })
});

router.get('/questions', function(req, res, next) {
    var url = "https://opentdb.com/api.php?amount=15&category=9&difficulty=easy&type=boolean";
    request(url).pipe(res);
    /*var newscore = new Score({Name: "test", Score: "100"});
    newscore.save(function(err, post) { 
      if (err) return console.error(err);
      res.sendStatus(200);
    });*/
})

module.exports = router;
