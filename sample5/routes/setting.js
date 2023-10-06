const router = require("express")();
const path = require("path");

router.set("view engine", "ejs");
router.set("views", path.join(__dirname, "../views/setting"));

router.get("/txt_printer_page", (req, res) => {
  res.render("txt_printer_page");
});

router.get("/calculator_page", (req, res) => {
  res.render("calculator_page");
});

router.get("/car_config_page", (req, res) => {
  res.render("car_config_page");
});

router.get("/fig_printer_page", (req, res) => {
  res.render("fig_printer_page");
});

console.log(__dirname)

module.exports = router;
