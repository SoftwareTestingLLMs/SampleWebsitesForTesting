let isTextPrinted = sessionStorage.getItem("isTxtPrinted")
  ? sessionStorage.getItem("isTxtPrinted")
  : false;
const BRACE_LEFT = "[";
const BRACE_RIGHT = "]";
const LINE_BREAK = "<br>";
const stateFigPrinter = sessionStorage.getItem("stateFigPrinter")
  ? sessionStorage.getItem("stateFigPrinter")
  : "hidden";

isFigPrinterActivated();
maintainPrinting();

function isFigPrinterActivated() {
  document.getElementById("btn_fig_printer").style.visibility = stateFigPrinter;
}

function maintainPrinting() {
  console.log(isTextPrinted);
  if (isTextPrinted) {
    printText();
  }
}

function printText() {
  isTextPrinted = sessionStorage.setItem("isTxtPrinted", true);
  style = JSON.parse(sessionStorage.getItem("style"))
    ? JSON.parse(sessionStorage.getItem("style"))
    : [];
  color = sessionStorage.getItem("color")
    ? sessionStorage.getItem("color")
    : "black";
  fontSize = sessionStorage.getItem("fontSize")
    ? sessionStorage.getItem("fontSize")
    : "12";
  font = sessionStorage.getItem("font")
    ? sessionStorage.getItem("font")
    : "DejaVu Sans";
  numWords = sessionStorage.getItem("numWords")
    ? sessionStorage.getItem("numWords")
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
