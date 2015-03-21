var express = require( 'express' );
var bodyParser = require( 'body-parser' );


var app = express();


app.use(express.static(__dirname + "/../client"));
app.use(bodyParser.urlencoded({extended: true}));


var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Hoard-It listening at http://%s:%s', host, port);
});


module.exports.app = app;