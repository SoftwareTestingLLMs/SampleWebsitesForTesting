const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const settingsRouter = require(path.join(__dirname,"/routes/setting"))

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname, '/public')));

app.use("/setting",settingsRouter)

app.set('views', path.join(__dirname, '/views/main'));


app.get("/", function (req, res) {
  res.render("index")
});

app.get("/calculator", function (req, res) {
  res.render("calculator")
});

app.get("/car_config", function (req, res) {
  res.render("car_config")
});

app.get("/txt_printer", function (req, res) {
  res.render("txt_printer")
});

app.get("/fig_printer", function (req, res) {
  res.render("fig_printer")
});


app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});
console.log(__dirname)


