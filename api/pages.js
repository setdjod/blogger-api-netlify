var serverless = require("serverless-http");
var cors = require("cors");
var app = require("./_default");

var router = require("../routers/pages");

app.use("/pages", cors(), router);
app.use("/.netlify/functions/pages", cors(), router);

module.exports.handler = serverless(app);
