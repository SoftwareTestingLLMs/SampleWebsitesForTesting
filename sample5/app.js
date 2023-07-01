const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const settingsRouter = require(path.join(__dirname,"/routes/setting"))

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname, '/public')));

app.use("/setting",settingsRouter)


app.set('views', path.join(__dirname, '/views/main_pages'));


app.get("/", function (req, res) {
  res.render("index")
});

app.get("/calculator", function (req, res) {
  res.render("calculator")
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});



