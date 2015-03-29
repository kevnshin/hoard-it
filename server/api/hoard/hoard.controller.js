'use strict';

var Hoard = require('./hoard.model.js');

exports.index = function (req, res) {
  return res.render('index');
}

exports.create_hoard = function (req, res) {
  console.log(req.body);
  var sample = {
    snippet: req.body.snippet,
    url: req.body.url
  };
  var new_snippet = new Hoard(sample);
  new_snippet.save( function (err, hoard) {
    if (err) {
      res.sendStatus(404);
      throw err;
    }
  })

  res.sendStatus(200);
}