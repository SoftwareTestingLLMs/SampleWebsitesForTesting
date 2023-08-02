const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const DEFAULT_COLOR = "black";
const DEFAULT_STYLE = "";
let selectedTires = [];
let selectedInteriors = [];
let selectedEngines = [];
let maintainTires = [];
let maintainInteriors = [];
let maintainEngines = [];
let maintainCarProp = [maintainTires, maintainInteriors, maintainEngines];
let selectedCarProp = [selectedTires, selectedInteriors, selectedEngines];

const properties = ["Tire", "Interior", "Engine"];

function calcProp() {
  //Save tires in storage
  selectionTire = document.querySelectorAll('input[name="tire"]:checked');
  selectedTires.splice(0, selectedTires.length);
  maintainTires.splice(0, maintainTires.length);

  selectionTire.forEach((element) => {
    selectedTires.push(element.value);
  });
  selectionTire.forEach((element) => {
    maintainTires.push(element.id);
  });
  sessionStorage.setItem("tires", JSON.stringify(maintainTires));

  //Save interior in storage
  selectedInteriors.splice(0, selectedInteriors.length);
  maintainInteriors.splice(0, maintainInteriors.length);

  selectionInterior = document.querySelectorAll(
    'input[name="interior"]:checked'
  );
  selectionInterior.forEach((element) => {
    selectedInteriors.push(element.id);
  });
  maintainInteriors = selectedInteriors.slice();
  sessionStorage.setItem("interiors", JSON.stringify(maintainInteriors));

  //Save engine in storage
  selectedEngines.splice(0, selectedEngines.length);
  maintainEngines.splice(0, maintainEngines.length);

  selectionEngine = document.querySelectorAll('input[name="engine"]:checked');
  selectionEngine.forEach((element) => {
    selectedEngines.push(element.value);
  });
  selectionEngine.forEach((element) => {
    maintainEngines.push(element.id);
  });
  sessionStorage.setItem("engines", JSON.stringify(maintainEngines));

  addConfigProp();

  determineInvalidCars();
  determineValidCars();

  saveValidCars();
}

function maintainState() {
  savedTires = JSON.parse(sessionStorage.getItem("tires"))
    ? JSON.parse(sessionStorage.getItem("tires"))
    : ["eighteen", "nineteen", "twenty", "twentyTwo"];

  savedInteriors = JSON.parse(sessionStorage.getItem("interiors"))
    ? JSON.parse(sessionStorage.getItem("interiors"))
    : ["modern", "vintage", "sport"];

  savedEngines = JSON.parse(sessionStorage.getItem("engines"))
    ? JSON.parse(sessionStorage.getItem("engines"))
    : ["combustionA", "combustionB", "combustionC", "electricA", "electricB"];

  selectedProps = [savedTires, savedInteriors, savedEngines];

  for (let propNum = 0; propNum < selectedProps.length; propNum++) {
    for (
      let propCount = 0;
      propCount < selectedProps[propNum].length;
      propCount++
    ) {
      document.getElementById(selectedProps[propNum][propCount]).checked = true;
    }
  }
}

maintainState();
