const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html"
const SLASH = "/"
const content = [12, "This is a Text"];
 



const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname, '/public')));

console.log(__dirname+"\n")

app.get("/", function (req, res) {
  res.render("index")
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});



