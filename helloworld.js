// example taken from heroku
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('<h1 id="test" style="font-family:Avenir; font-weight: lighter; color:#551A8B;">Hello World!</h1>');
});

var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
  console.log("Listening on " + port);
});