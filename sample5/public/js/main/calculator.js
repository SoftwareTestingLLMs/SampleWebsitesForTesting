/// <reference path="..\..\..\typings\index.d.ts" />

let isTextPrinted = sessionStorage.getItem("isTxtPrinted")
  ? sessionStorage.getItem("isTxtPrinted")
  : false;
let firstDigit = "";
let secondDigit = "";
let arithmetic = "";
let lastResult = 0 ? sessionStorage.getItem("isTxtPrinted") : false;
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
  JSON.parse(sessionStorage.getItem("arithmetic")) == null
    ? ["addition"]
    : JSON.parse(sessionStorage.getItem("arithmetic"));
const numSys =
  sessionStorage.getItem("numSys") == null
    ? "decimal"
    : sessionStorage.getItem("numSys");
const stateFigPrinter = sessionStorage.getItem("stateFigPrinter")
  ? sessionStorage.getItem("stateFigPrinter")
  : "hidden";

isFigPrinterActivated();

function isFigPrinterActivated() {
  document.getElementById("btn_fig_printer").style.visibility = stateFigPrinter;
}

readSettings();
maintainPrinting();

function maintainPrinting() {
  if (isTextPrinted) {
    firstDigit = sessionStorage.getItem("firstDigit", firstDigit);
    secondDigit = sessionStorage.getItem("secondDigit", secondDigit);
    arithmetic = sessionStorage.getItem("arithmetic", arithmetic);
    lastResult = sessionStorage.getItem("lastResult", lastResult);
    selecFirstDigit.options[selecFirstDigit.selectedIndex].text = firstDigit;
    selecSecondDigit.options[selecSecondDigit.selectedIndex].text = secondDigit;
    selecArithmetic.options[selecArithmetic.selectedIndex].text = arithmetic;
    display();
  }
}

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

function printResult() {
  readingInput();
  saveInput();
  display();
}

function display() {
  if (isNaN(lastResult) || lastResult == Infinity) {
    $("#modalError").modal("show");
    lastResult = 0;
  }

  //Print Result
  document.getElementById("calc_result").innerHTML =
    "Last result: " + lastResult + LINE_BREAK + "Base." + numSys.toUpperCase();
}

function readingInput() {
  firstDigit = selecFirstDigit.options[selecFirstDigit.selectedIndex].text;
  secondDigit = selecSecondDigit.options[selecSecondDigit.selectedIndex].text;
  arithmetic = selecArithmetic.options[selecArithmetic.selectedIndex].text;
  lastResult = eval(firstDigit + arithmetic + secondDigit);
}

function saveInput() {
  sessionStorage.setItem("firstDigit", firstDigit);
  sessionStorage.setItem("secondDigit", secondDigit);
  sessionStorage.setItem("arithmetic", arithmetic);
  sessionStorage.setItem("lastResult", lastResult);
}
