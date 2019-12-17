const express = require("express");
const router = express.Router();

const app = express();

app.get("/", (req, res, next) => {
  console.log("inside  shop / route");
  next();
});
module.exports = router;
