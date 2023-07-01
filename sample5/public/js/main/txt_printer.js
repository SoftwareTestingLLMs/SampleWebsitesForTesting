const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const content = [12, "This is a Text"];
const BRACE_LEFT = "[";
const BRACE_RIGHT = "]";
const LINE_BREAK = "<br>";
const stateFigPrinter = localStorage.getItem("stateFigPrinter")
  ? localStorage.getItem("stateFigPrinter")
  : "hidden";

isFigPrinterActivated();

function isFigPrinterActivated() {
  document.getElementById("btn_fig_printer").style.visibility = stateFigPrinter;
}

function changeFunctionality(btn) {
  let htmpage = btn.id.split(SPLIT_FIRST_UNDERSCORE)[1];
  path = location.pathname;
  console.log(window.location.hostname);
  console.log(path.replace(htmpage, ""));
  location.href = "../" + htmpage + SLASH + htmpage + HTML_ENDING;
}

function printText() {
  style = JSON.parse(localStorage.getItem("style"))
    ? JSON.parse(localStorage.getItem("style"))
    : [];
  color = localStorage.getItem("color")
    ? localStorage.getItem("color")
    : "black";
  fontSize = localStorage.getItem("fontSize")
    ? localStorage.getItem("fontSize")
    : "12";
  font = localStorage.getItem("font")
    ? localStorage.getItem("font")
    : "DejaVu Sans";
  numWords = localStorage.getItem("numWords")
    ? localStorage.getItem("numWords")
    : "50";

  document.getElementById("txt_content").innerHTML =
    "Font Styles:" +
    BRACE_LEFT +
    style +
    BRACE_RIGHT +
    LINE_BREAK +
    "Color: Color." +
    color.toUpperCase() +
    LINE_BREAK +
    "Font Size: " +
    fontSize +
    LINE_BREAK +
    "Font: " +
    font +
    LINE_BREAK +
    "Number of words: " +
    numWords;
}
