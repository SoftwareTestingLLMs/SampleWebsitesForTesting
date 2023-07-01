const router = require("express")();
const path = require('path');

router.set("view engine", "ejs");
router.set("views", path.join(__dirname, "../views/setting"));
// router.use(express.static(path.join(__dirname, '/public')));

router.get("/calculator_page", (req, res) => {
  res.render("calculator_page");
});

module.exports = router