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
const mappingName = { "Car A": "carA", "Car B": "carB", "Car C": "carC" };

const carFirstLetter = "abcdefghijklmnopqrstuvwxyz".split("");
let userDefinedCar = [];
const stateFigPrinter = sessionStorage.getItem("stateFigPrinter")
  ? sessionStorage.getItem("stateFigPrinter")
  : "hidden";

isFigPrinterActivated();

function isFigPrinterActivated() {
  document.getElementById("btn_fig_printer").style.visibility = stateFigPrinter;
}


getCars();
getValidCars();
addValidCars();
console.log(userDefinedCar);



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

function getValidCars() {
  for (let carNum = 0; carNum < userDefinedCar.length; carNum++) {
    let carName = userDefinedCar[carNum].get(carProperties[4])[0];
    carArrays = sessionStorage.getItem(carName)
      ? sessionStorage.getItem(carName)
      : [true];
    userDefinedCar[carNum].set(carProperties[3], [eval(carArrays)]);
  }
}

function addValidCars() {
  selectorModel = document.getElementById("Model");
  selectorModel.length = 0;
  for (let carNum = 0; carNum < userDefinedCar.length; carNum++) {
    if (userDefinedCar[carNum].get(carProperties[3])[0]) {
      option = document.createElement("option");
      option.text = userDefinedCar[carNum].get(carProperties[4]);
      selectorModel.add(option);
    }
  }
}

function getCars() {
  carA = sessionStorage.getItem("Car A")
   
  carB = sessionStorage.getItem("Car B")
    
  carC = sessionStorage.getItem("Car C")
    
  
  if (eval(carA)) {
    userDefinedCar.push(new Map(JSON.parse(sessionStorage.carA)));
  }else if(carA ==null){
    userDefinedCar = createCar();
  }
  if (eval(carB)) {
    userDefinedCar.push(new Map(JSON.parse(sessionStorage.carB)));
  }
  if (eval(carC)) {
    userDefinedCar.push(new Map(JSON.parse(sessionStorage.carC)));
  }
}

function selectedCar() {
  selectorModel = document.getElementById("Model");
  carName = selectorModel.options[selectorModel.selectedIndex].text;
  sessionStorage.setItem("selectedCarName", carName);
  sessionStorage.removeItem("displayedProps");
  sessionStorage.removeItem("displayedValues");

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
      if (prop == 0) {
        option.selected = true;
      }
      option.text = addProperties[prop];
      option.value = addProperties[prop];
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
    "Propulsion System" + ": " + value.charAt(0).toUpperCase() + value.slice(1);

  $("#modalConfig").modal("show");
  $("#conifgContent").html(string);
}

function resetConfig() {
  //DELETE PRINTED VALUES HIER
  for (let propNum = 0; propNum < carProperties.length - 2; propNum++) {
    configProp = document.getElementById(carProperties[propNum] + DIV);
    configProp.style.display = "none";
  }
  configBtn = document.getElementById("btn_display_config");
  configBtn.style.display = "none";
  sessionStorage.removeItem("displayedProps");
  sessionStorage.removeItem("displayedValues");
}

function saveDisplayed(element) {
  content = JSON.parse(sessionStorage.getItem("displayedProps"))
    ? JSON.parse(sessionStorage.getItem("displayedProps"))
    : [];
  if (!content.includes(element)) {
    content.push(element);
  }
  sessionStorage.setItem("displayedProps", JSON.stringify(content));
}

function saveValue(element) {
  values = JSON.parse(sessionStorage.getItem("displayedValues"))
    ? JSON.parse(sessionStorage.getItem("displayedValues"))
    : [];

  replaceValueIndex = carProperties.indexOf(element) + 1;
  select = document.getElementById(element);
  userInput = select.options[select.selectedIndex].text;
  if (values.length >= replaceValueIndex) {
    values[replaceValueIndex] = userInput;
  } else {
    values.push(userInput);
  }
  sessionStorage.setItem("displayedValues", JSON.stringify(values));
}

function maintainState() {
  props = JSON.parse(sessionStorage.getItem("displayedProps"))
    ? JSON.parse(sessionStorage.getItem("displayedProps"))
    : [];

  values = JSON.parse(sessionStorage.getItem("displayedValues"))
    ? JSON.parse(sessionStorage.getItem("displayedValues"))
    : [];

  car = sessionStorage.getItem("selectedCarName");
  basedCar = userDefinedCar.filter(
    (userCar) => userCar.get(carProperties[4])[0] == car
  )[0];

  for (let propNum = 0; propNum < props.length; propNum++) {
    if (props[propNum].includes("btn")) {
      displayConfigBtn();
    } else {
      configProp = document.getElementById(props[propNum] + DIV);
      addOption(props[propNum]);
      selector = document.getElementById(props[propNum]);
      if (values[propNum]) {
        selector.value = values[propNum];
      }
      configProp.style.display = "block";
    }
  }
}

maintainState();
