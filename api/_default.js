/* eslint-disable no-undef */
var express = require('express');

var app = express();

var env = process.env.APP_ENV;

if (env === 'development') {
  app.set('json spaces', 2);
}

module.exports = app;