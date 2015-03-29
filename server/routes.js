'use strict'

var cors = require('cors');


//CONTROLLERS
var hoards = require('./api/hoard/hoard.controller.js');

module.exports = function (app) {
  
  app.get('/', hoards.index);
  app.post('/api/hoards', cors(), hoards.create_hoard);

}