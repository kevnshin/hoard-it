var express = require( 'express' );
var mongoose = require( 'mongoose' );

mongoose.connect( require( './config.json' ).databaseURL );

var app = express();

require('./middleware')(app);
require('./routes')(app);

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Hoard-It listening at http://%s:%s', host, port);
});

module.exports.app = app;