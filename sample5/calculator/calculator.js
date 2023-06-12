/// <reference path="..\typings\index.d.ts" />

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
console.log(settingsArithmetic);
const numSys =
  localStorage.getItem("numSys") == null
    ? "decimal"
    : localStorage.getItem("numSys");

onLoad();



function onLoad() {
  let actualOptions = [];
  let i = 0;
  for (i = 0; i < selecArithmetic.length; i++) {
    actualOptions.push(selecArithmetic.options[i].text);
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
 $("#exampleModal").modal("show")
  firstDigit = selecFirstDigit.options[selecFirstDigit.selectedIndex].text;
  secondDigit = selecSecondDigit.options[selecSecondDigit.selectedIndex].text;
  arithmetic = selecArithmetic.options[selecArithmetic.selectedIndex].text;
  lastResult = eval(firstDigit + arithmetic + secondDigit);

  //Print Result
  document.getElementById("calc_result").innerHTML =
    "Last result: " + lastResult + LINE_BREAK + "Base." + numSys.toUpperCase();
}
