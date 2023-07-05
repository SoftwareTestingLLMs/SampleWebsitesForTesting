const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const BRACE_LEFT = "[";
const BRACE_RIGHT = "]";
const LINE_BREAK = "<br>";
const selecFigure = document.getElementById("figure_ops");
const settingFigures = JSON.parse(sessionStorage.getItem("figure"))
  ? JSON.parse(sessionStorage.getItem("figure"))
  : [];
const settingColor = sessionStorage.getItem("color")
  ? sessionStorage.getItem("color")
  : "black";
const stateFigPrinter = sessionStorage.getItem("stateFigPrinter")
  ? sessionStorage.getItem("stateFigPrinter")
  : "hidden";

isFigPrinterActivated();
readSettings();
maintainState()

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


function readSettings() {
  let actualOptions = [];
  let i = 0;
  for (i = 0; i < selecFigure.length; i++) {
    actualOptions.push(selecFigure.options[i].text);
  }

  settingFigures.forEach((element) => {
    option = document.createElement("option");
    element = element.charAt(0).toUpperCase() + element.slice(1);
    option.text = element;
    option.value = element;
    if (!actualOptions.includes(element)) {
      selecFigure.add(option);
    }
  });
}

function readUserInput(){
  selectFigure = document.getElementById("figure_ops");
  selectedFig = selectFigure.options[selectFigure.selectedIndex].text;
  color = sessionStorage.getItem("color")
    ? sessionStorage.getItem("color")
    : "black";
  sessionStorage.setItem("typeFig",selectedFig)
}
function printText() {
  document.getElementById("txt_content").innerHTML =
    eval(selectedFig.toLowerCase() + "()") +
    LINE_BREAK +
    "Color." +
    color.toUpperCase();
}

function maintainState(){
  selectedFig = sessionStorage.getItem("typeFig")
  selectFigure = document.getElementById("figure_ops");
  selectFigure.value= selectedFig
  color = sessionStorage.getItem("color")
  ? sessionStorage.getItem("color")
  : "black";
  printText();
}
