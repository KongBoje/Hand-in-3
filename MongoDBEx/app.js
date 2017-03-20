var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');


var api = require('./routes/allJokes.js')
var routes = require('./routes/index.js')

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/api', api);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.error(err.status);
  res.status(err.status || 500);
  res.json({msg: err.message,status: err.status});
})

console.log("server has started on 3000")
module.exports = app;