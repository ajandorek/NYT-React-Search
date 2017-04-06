var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var express = require("express");
var logger = require("morgan");

var Article = require("./models/Article.js");

mongoose.Promise = Promise;

var app = express();
var PORT = process.env.PORT || 3000;

app.use(methodOverride('_method'));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.connect("mongodb://localhost/nyt-react-search");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/api/saved", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});
app.post("/api/saved", function(req, res){
    Article.create({
        title: req.body.title,
        date: req.body.date,
        url: req.body.url
    }, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.send("Saved Search");
        }
    });
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});