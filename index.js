var PORT = process.env.PORT || 9000;

//scrape data
var cheerio = require('cheerio'),
  $ = cheerio.load('<h2 class="title">Hello World</h2>');
$('h2.title').text('Hello There!');
$('h2').addClass('welcome');
$.html();

var express = require('express');
var exphbs  = require('express-handlebars');


var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/my_database');


var bodyParser = require('body-parser')

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  var $ = cheerio.load(html);
  var result = [];
  $("p.title").each(function(i, element) {
    var title = $(this).text();
    var link
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
    }
  })
})


var app = express();

var deps = require('./lib/dependencies');
deps.analyze('./test/', {
  cache: true,
  latest: true,
  black_lists: ['black/']
}, function(err, version) {
  if (err) {
    console.log(err);
  } else {
    console.log('Packages version info: ');
    console.log(JSON.stringify(version, null, 4));
  }
});

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  db.close();
});
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});
app.listen(PORT, function() {
  console.log("Listening on:" + PORT)
});