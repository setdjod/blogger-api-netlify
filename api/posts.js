var serverless = require("serverless-http");
var cors = require("cors");
var app = require("./_default");

var router = require("../routers/posts");

app.use("/posts", cors(), router);
app.use("/.netlify/functions/posts", cors(), router);

module.exports.handler = serverless(app);
