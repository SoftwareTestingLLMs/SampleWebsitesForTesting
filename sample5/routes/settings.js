const express = require("express");
const router = express.Router();

// router.use(express.static(path.join(__dirname, '/public')));

router.get("/calculator_page", (req, res) => {
  res.render("calculator_page");
});

module.exports = router