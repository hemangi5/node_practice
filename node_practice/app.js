var http = require("http");
var express = require("express");

const app = express();
const server = http.createServer(app);
console.log("object");
server.listen(3000);
