const BRACE_LEFT = "[";
const BRACE_RIGHT = "]";
const LINE_BREAK = "<br>";
const stateFigPrinter = sessionStorage.getItem("stateFigPrinter")
  ? sessionStorage.getItem("stateFigPrinter")
  : "hidden";

isFigPrinterActivated();
printedText();

function isFigPrinterActivated() {
  document.getElementById("btn_fig_printer").style.visibility = stateFigPrinter;
}

function updateText() {
  sessionStorage.setItem("isTxtPrinted", "true");
  printText();
}

function printText() {
  readSettings();
  if (sessionStorage.getItem("isTxtPrinted")) {
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

    maintainPrintedValues();
  }
}

function printedText() {
  if (sessionStorage.getItem("isTxtPrinted")) {
    document.getElementById("txt_content").innerHTML =
      "Font Styles:" +
      BRACE_LEFT +
      JSON.parse(sessionStorage.getItem("printedSytle")) +
      BRACE_RIGHT +
      LINE_BREAK +
      "Color: Color." +
      sessionStorage.getItem("printedColor").toUpperCase() +
      LINE_BREAK +
      "Font Size: " +
      sessionStorage.getItem("printedFontSize") +
      LINE_BREAK +
      "Font: " +
      sessionStorage.getItem("printedFont") +
      LINE_BREAK +
      "Number of words: " +
      sessionStorage.getItem("printedNumWords");
  }
}

function maintainPrintedValues() {
  sessionStorage.setItem("printedSytle", JSON.stringify(style));
  sessionStorage.setItem("printedColor", color);
  sessionStorage.setItem("printedFontSize", fontSize);
  sessionStorage.setItem("printedFont", font);
  sessionStorage.setItem("printedNumWords", numWords);
}

function readSettings() {
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
}
