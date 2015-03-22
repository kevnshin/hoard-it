var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');


function middleware (app) {

  app.use(express.static(__dirname + "/../client"));
  app.use(session({ 
    secret: require('./config.json').secret, //this secret ecrypts and decrypts cookies that are sent back and forth between browser and server
    resave: false,
    saveUninitialized: true
  }));
  app.use(methodOverride('_method'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(passport.initialize());
  app.use(passport.session());
}

module.exports = middleware;