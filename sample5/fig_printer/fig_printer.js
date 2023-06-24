const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const BRACE_LEFT = "[";
const BRACE_RIGHT = "]";
const LINE_BREAK = "<br>";
const selecFigure = document.getElementById("figure_ops");
const settingFigures = JSON.parse(localStorage.getItem("figure"))
  ? JSON.parse(localStorage.getItem("figure"))
  : [];
const settingColor = localStorage.getItem("color")
  ? localStorage.getItem("color")
  : "black";
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

readSettings();

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
    if (!actualOptions.includes(element)) {
      selecFigure.add(option);
    }
  });
}

function printText() {
  selectFigure = document.getElementById("figure_ops");
  selectedFig = selectFigure.options[selectFigure.selectedIndex].text;
  color = localStorage.getItem("color")
    ? localStorage.getItem("color")
    : "black";
  document.getElementById("txt_content").innerHTML =
    eval(selectedFig.toLowerCase() + "()") +
    LINE_BREAK +
    "Color." +
    color.toUpperCase();
}
