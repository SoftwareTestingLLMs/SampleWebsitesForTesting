/// <reference path="..\..\..\typings\index.d.ts" />

const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const GO_UP_ONE_DIR = "../";
const LINE_BREAK = "<br>";
const arithmeticString = [
  "addition",
  "subtraction",
  "multiplication",
  "division",
];
const DEFAULT_OPTION = "addition";
const arithmeticSymbol = ["+", "-", "*", "/"];
let arithmeticArray = arithmeticString.map((x, i) => [x, arithmeticSymbol[i]]);
let arithmeticMap = new Map(arithmeticArray);
const selecArithmetic = document.getElementById("calc_rule");
const selecFirstDigit = document.getElementById("first_digit");
const selecSecondDigit = document.getElementById("second_digit");

const settingsArithmetic =
  JSON.parse(localStorage.getItem("arithmetic")) == null
    ? ["addition"]
    : JSON.parse(localStorage.getItem("arithmetic"));
const numSys =
  localStorage.getItem("numSys") == null
    ? "decimal"
    : localStorage.getItem("numSys");
const stateFigPrinter = localStorage.getItem("stateFigPrinter")
  ? localStorage.getItem("stateFigPrinter")
  : "hidden";

isFigPrinterActivated();

function isFigPrinterActivated() {
  document.getElementById("btn_fig_printer").style.visibility = stateFigPrinter;
}


readSettings();

function readSettings() {
  let actualOptions = [];
  let i = 0;
  for (i = 0; i < selecArithmetic.length; i++) {
    actualOptions.push(selecArithmetic.options[i].text);
  }
  if (actualOptions.length == 0) {
    actualOptions.push(DEFAULT_OPTION);
  }

  settingsArithmetic.forEach((element) => {
    option = document.createElement("option");
    option.text = arithmeticMap.get(element);
    if (!actualOptions.includes(arithmeticMap.get(element))) {
      selecArithmetic.add(option);
    }
  });
}
function changeFunctionality(btn) {
  let htmpage = btn.id.split(SPLIT_FIRST_UNDERSCORE)[1];
  path = location.pathname;
  location.href = GO_UP_ONE_DIR + htmpage + SLASH + htmpage + HTML_ENDING;
}

function printResult() {
  firstDigit = selecFirstDigit.options[selecFirstDigit.selectedIndex].text;
  secondDigit = selecSecondDigit.options[selecSecondDigit.selectedIndex].text;
  arithmetic = selecArithmetic.options[selecArithmetic.selectedIndex].text;
  lastResult = eval(firstDigit + arithmetic + secondDigit);

  if(isNaN(lastResult)|| lastResult==Infinity){
    $("#modalError").modal("show");
    lastResult=0;
  }

  //Print Result
  document.getElementById("calc_result").innerHTML =
    "Last result: " + lastResult + LINE_BREAK + "Base." + numSys.toUpperCase();
}
