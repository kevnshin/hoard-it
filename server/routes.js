'use strict'

var cors = require('cors');


//CONTROLLERS
var hoards = require('./api/hoard/hoard.controller.js');

module.exports = function (app) {
  
  app.route('/api/hoards')
    .get(hoards.index)
    .post(cors(), hoards.create_hoard);

}