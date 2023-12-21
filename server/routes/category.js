const express = require("express");
const router = express.Router();

//Endpoint http://localhost:8000/api/category
router.get("/category", (req, res) => {
  res.send("hello get category");
});
router.post("/category", (req, res) => {
  res.send("hello get category");
});

module.exports = router;
