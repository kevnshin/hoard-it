'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema
    ;

var HoardSchema = new Schema ({
  snippet: String,
  url: String
});

module.exports = mongoose.model('Hoard', HoardSchema);