// new relic monitoring
require("newrelic");

// set up
var express = require("express");
var path = require("path");
var routes = require("/routes");
var app = express();

// set routes
var routes = require('./routes/index');

app.configure(function() {
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	app.set('port', 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.cookieParser()),
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/', routes);
});

app.get('/', function(req, res) {
  res.send('<h1 id="test" style="font-family:Avenir; font-weight: lighter; color:#551A8B;">Hello World!</h1>');
	// res.render('public/index.jade', {title: 'Login'});
});

// http.createServer(app).listen(app.get('port'), function () {
//     console.log("Express server listening on port " + app.get('port'));
// });

// var port = Number(process.env.PORT || 3000);
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });

module.exports = app;