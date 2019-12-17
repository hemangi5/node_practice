const express = require("express");
const router = express.Router();

const app = express();

app.get("/admin", (req, res, next) => {
  console.log("inside admin /admin route");
  next();
});

app.get("/", (req, res, next) => {
  console.log("inside admin / route");
  next();
});
module.exports = router;
