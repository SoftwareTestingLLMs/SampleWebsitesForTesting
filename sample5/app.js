const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const settingsRouter = require(path.join(__dirname,"/routes/setting"))

app.set("view engine","ejs")

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(path.join(__dirname, '/public')));
app.use("/setting",settingsRouter)

console.log(__dirname+"\n")

app.get("/", function (req, res) {
  res.render("index")
});

app.get("/calculator", function (req, res) {
  res.render("calculator")
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});



