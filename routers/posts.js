/* eslint-disable no-console */

var express = require('express');
var request = require('request');

var router = express.Router({ mergeParams: true });

var config = require('../config');
var helper = require('../helpers');

router.route('/').get(function (req, res) {
  var blogId = req.query.blogid || config.blogId;
  var order = req.query.order === 'updated' ? 'updated' : 'published';
  var pages = req.query.pages ? parseInt(req.query.pages) : 1;
  var limit = req.query.limit ? parseInt(req.query.limit) : 5;
  var start = pages > 1 ? parseInt(limit * pages - (limit - 1)) : 1;
  var query = {
    'orderby': order,
    'start-index': start,
    'max-results': limit,
    'alt': 'json'
  };

  if (req.query.query) Object.assign(query, { 'q': req.query.query });
  if (req.query.updated_min) Object.assign(query, { 'updated-min': req.query.updated_min });
  if (req.query.updated_max) Object.assign(query, { 'updated-max': req.query.updated_max });
  if (req.query.published_min) Object.assign(query, { 'published-min': req.query.published_min });
  if (req.query.published_max) Object.assign(query, { 'published-max': req.query.published_max });

  var url = config.apiUrl + "/" + blogId + "/posts/summary";
  console.log('[GET]', url);

  request({ qs: query, uri: url, json: true }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (body && body.feed) {
        res.json(helper.getFeeds(body.feed));
      } else {
        res.status(500).json({ error: body });
      }
    } else {
      res.status(404).send(body);
    }
  });
});

router.route('/:post_id').get(function (req, res) {
  var blogId = req.query.blogid || config.blogId;
  var isjson = req.query.isjson || false;
  var type = req.query.type || "default";
  var url = config.apiUrl + "/" + blogId + "/posts/" + type + "/" + req.params.post_id;
  var query = { alt: 'json' };
  console.log("[GET]", url);

  request({ qs: query, uri: url, json: true }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (body && body.entry) {
        res.json(helper.getEntry(body.entry, isjson));
      } else {
        res.status(500).json({ error: body });
      }
    } else {
      res.status(404).send(body);
    }
  });
}).post(function (req, res) {
  res.status(500).json({ error: req.method + ' Not Allowed!' });
});

module.exports = router;