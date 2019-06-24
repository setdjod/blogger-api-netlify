var serverless = require("serverless-http");
var cors = require("cors");
var app = require("./_default");

var router = require('../routers/label');

app.use("/label", cors(), router);
app.use("/.netlify/functions/label", cors(), router);

module.exports.handler = serverless(app);
