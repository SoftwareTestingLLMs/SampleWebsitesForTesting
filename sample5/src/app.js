const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html"
const SLASH = "/"
const content = [12, "This is a Text"];
 

// function changeFunctionality(btn) {
//     if(btn){
//         //settings
//     }
    
//     let htmpage = btn.id.split(SPLIT_FIRST_UNDERSCORE)[1];
//     console.log(htmpage + SLASH + htmpage + HTML_ENDING);
//     location.href = htmpage + SLASH + htmpage + HTML_ENDING;
    
// }

function printText() {
    document.getElementById("txt_content").innerHTML = localStorage.getItem("modelInput");
}

function displayConfig() {
    selectorModel = document.getElementById("model");
    modelValue = selectorModel.value;
    modelInput = selectorModel.options[selectorModel.selectedIndex].text;
    localStorage.setItem('modelInput', modelInput);
}

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.render();
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
