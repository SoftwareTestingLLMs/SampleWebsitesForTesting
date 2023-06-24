const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const GO_UP_ONE_DIR = "../";
let basedCar = "";
const DIV = "_div";
let selectedTire = "";
let selectedInterior = "";
let selectedEngine = "";
const LINE_BREAK = "<br>";
const carProperties = ["Tire", "Interior", "Engine", "Valid", "Name"];
const aTire = ["20", "22"];
const aInterior = ["modern", "vintage"];
const aEngine = ["Combustion Engine A", "Combustion Engine C"];
const aValid = [true];
const aName = ["Car A"];

const bTire = ["18", "19", "20"];
const bInterior = ["modern", "sport"];
const bEngine = ["Electric Motor A", "Electric Motor B"];
const bValid = [true];
const bName = ["Car B"];

const cTire = ["19", "20", "22"];
const cInterior = ["vintage", "sport"];
const cEngine = [
  "Combustion Engine B",
  "Combustion Engine C",
  "Electric Motor A",
  "Electric Motor B",
];
const cValid = [true];
const cName = ["Car C"];

const carFirstLetter = "abcdefghijklmnopqrstuvwxyz".split("");
const userDefinedCar = createCar();
const stateFigPrinter = localStorage.getItem("stateFigPrinter")
  ? localStorage.getItem("stateFigPrinter")
  : "hidden";

isFigPrinterActivated();

function isFigPrinterActivated() {
  document.getElementById("btn_fig_printer").style.visibility = stateFigPrinter;
}

getValidCars();
addValidCars();

function createCar() {
  let standardCars = [];
  standardCars.splice(0, standardCars.length);

  carFirstLetter.forEach((letter) => {
    try {
      if (eval(letter.concat(carProperties[0])) != "undefined") {
        carSpecificProp = carProperties.map((prop, i) => [
          prop,
          [
            eval(letter.concat(prop)),
            eval(letter.concat(prop)),
            eval(letter.concat(prop)),
            eval(letter.concat(prop)),
            eval(letter.concat(prop)),
          ][i],
        ]);
        standardCars.push(new Map(carSpecificProp));
      }
    } catch (error) {
      //not defined car properties
    }
  });
  return standardCars;
}

function changeFunctionality(btn) {
  let htmpage = btn.id.split(SPLIT_FIRST_UNDERSCORE)[1];
  path = location.pathname;
  location.href = GO_UP_ONE_DIR + htmpage + SLASH + htmpage + HTML_ENDING;
}

function getValidCars() {
  for (let carNum = 0; carNum < userDefinedCar.length; carNum++) {
    let carName = userDefinedCar[carNum].get(carProperties[4])[0];
    carArrays = localStorage.getItem(carName)
      ? localStorage.getItem(carName)
      : true;
    userDefinedCar[carNum].set(carProperties[3], eval(carArrays));
  }
}

function addValidCars() {
  selectorModel = document.getElementById("Model");
  selectorModel.length = 0;
  for (let carNum = 0; carNum < userDefinedCar.length; carNum++) {
    if (userDefinedCar[carNum].get(carProperties[3])) {
      option = document.createElement("option");
      option.text = userDefinedCar[carNum].get(carProperties[4]);
      selectorModel.add(option);
    }
  }
}

function selectedCar() {
  selectorModel = document.getElementById("Model");
  carName = selectorModel.options[selectorModel.selectedIndex].text;

  for (let carNum = 0; carNum < userDefinedCar.length; carNum++) {
    if (userDefinedCar[carNum].get(carProperties[4]) == carName) {
      basedCar = userDefinedCar[carNum];
      break;
    }
  }
  resetConfig();
}

function addOption(actualSelector) {
  selector = document.getElementById(actualSelector);
  addProperties = basedCar.get(actualSelector);

  if (document.getElementById(actualSelector + DIV).style.display == "none") {
    selector.length = 0;
    for (let prop = 0; prop < addProperties.length; prop++) {
      option = document.createElement("option");
      option.text = addProperties[prop];
      selector.add(option);
    }
  }
}

function displayPropConfig(element) {
  nextConfigDisplay = document.getElementById(element + DIV);
  nextConfigDisplay.style.display = "block";
}

function displayConfigBtn() {
  configBtn = document.getElementById("btn_display_config");
  configBtn.style.display = "block";
}

function deleteOptions() {
  for (let propNum = 0; propNum < carProperties.length - 2; propNum++) {
    document.getElementById(carProperties[propNum]).length = 0;
  }
}

function getNextConfig(element) {
  elementName = element.id;
  configs = document.getElementsByClassName("car_config_selec");
  for (let i = 0; i < configs.length; i++) {
    if (configs[i].id == elementName) {
      return configs[i + 1].id;
    }
  }
}

function displayResultConfig() {
  string = "";

  string +=
    "Car: " +
    (
      basedCar
        .get(carProperties[4])[0]
        .replace("Car ", "")
        .toLowerCase()
        .charCodeAt(0) - 96
    ).toString();
  string += "<br>";

  selector = document.getElementById(carProperties[0]);
  value = selector.options[selector.selectedIndex].text;
  string += "Tires: Tire " + value.charAt(0).toUpperCase() + value.slice(1);
  string += "<br>";

  selector = document.getElementById(carProperties[1]);
  value = selector.options[selector.selectedIndex].text;
  string +=
    carProperties[1] + ": " + value.charAt(0).toUpperCase() + value.slice(1);
  string += "<br>";

  selector = document.getElementById(carProperties[2]);
  value = selector.options[selector.selectedIndex].text;
  value = value.replace("Engine", "");
  string +=
    carProperties[2] + ": " + value.charAt(0).toUpperCase() + value.slice(1);

  $("#modalConfig").modal("show");
  $("#conifgContent").html(string);
}

function resetConfig() {
  for (let propNum = 0; propNum < carProperties.length - 2; propNum++) {
    configProp = document.getElementById(carProperties[propNum] + DIV);
    configProp.style.display = "none";
  }
  configBtn = document.getElementById("btn_display_config");
  configBtn.style.display = "none";
}
