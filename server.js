var express = require('express');
var app = express();
// var passport = require('passport')
var path = require('path');
var fs = require('fs');
// var MongoClient = require('mongodb').MongoClient;
var session = require('express-session');
// var db;

// Connect to the db
// MongoClient.connect("mongodb://localhost:27017/sports", function(err, __db__) {
//   db = __db__;
// });

app.use(express.static('build'));

app.use(session({
  secret: 'asdfasf',
  resave: false,
  saveUninitialized: false,
}));

app.use('/login', function (req, res) {
  res.send('Login route used')
});

app.use('/admin', function (req, res) {
  res.send('Admin route used');
});

app.get('*', (req, res) => {
  fs.readFile(path.join('build', 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
