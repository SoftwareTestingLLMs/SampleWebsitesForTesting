const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const GO_UP_ONE_DIR = "../";

function changeFunctionality(btn) {
    let htmpage = btn.id.split(SPLIT_FIRST_UNDERSCORE)[1];
    path = location.pathname;
    location.href = GO_UP_ONE_DIR + htmpage + SLASH + htmpage + HTML_ENDING;


}

function printText() {
    document.getElementById("txt_content").innerHTML = localStorage.getItem("modelInput");
}

function displayConfig() {
    selectorModel = document.getElementById("model");
    modelInput = selectorModel.options[selectorModel.selectedIndex].text;
    localStorage.setItem('modelInput', modelInput);
}

