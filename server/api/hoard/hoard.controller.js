'use strict';

var Hoard = require('./hoard.model.js');

exports.index = function (req, res) {

  console.log("TEST");
  Hoard.find( function (err, hoards) {
    if (err) {
      return hanfdleError(res, err);
    }

    return res.status(200).json(hoards);

  })
}

exports.create_hoard = function (req, res) {
  console.log(req.body);
  // var sample = {
  //   snippet: "Sample Text",
  //   url: "http://www.google.com"
  // };
  // var new_snippet = new Hoard(sample);
  // new_snippet.save( function (err, hoard) {
  //   if (err) {
  //     throw err;
  //   }
  // })
}