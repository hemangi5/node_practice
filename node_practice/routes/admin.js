const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/admin", (req, res, next) => {
  res.json({ name: "admin/admin" });
});
// views / add - product.html;
router.get("/add-product", function(req, res) {
  // console.log(req.body);
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});
router.post("/add-product", function(req, res) {
  console.log(req.body);
  const data = req.body;
  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.send(
    "<h1>New product " +
      data.title +
      " addded</h1><a href='/shop'>Back to shop</a>"
  );
});

router.get("/", (req, res, next) => {
  res.send(
    '<form method="POST" action="/admin/add-product"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

module.exports = router;
