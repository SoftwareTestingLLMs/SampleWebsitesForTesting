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
const definedCars = createCar();

let invalidCars = [];

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

function addConfigProp() {
  for (let carNum = 0; carNum < userDefinedCar.length; carNum++) {
    for (let propNum = 0; propNum < carProperties.length - 2; propNum++) {
      definedCars[carNum].set(
        carProperties[propNum],
        userDefinedCar[carNum]
          .get(carProperties[propNum])
          .filter((prop) => selectedCarProp[propNum].includes(prop))
      );
    }
  }
}

function determineInvalidCars() {
  for (let carNum = 0; carNum < userDefinedCar.length; carNum++) {
    for (let propNum = 0; propNum < carProperties.length - 2; propNum++) {
      if (definedCars[carNum].get(carProperties[propNum]).length == 0) {
        definedCars[carNum].set(carProperties[3], [false]);
      }
    }
  }
}

function determineValidCars() {
  validCount = 0;
  for (let carNum = 0; carNum < userDefinedCar.length; carNum++) {
    validCount = 0;

    for (let propNum = 0; propNum < carProperties.length - 2; propNum++) {
      if (definedCars[carNum].get(carProperties[propNum]).length != 0) {
        validCount += 1;
      }
    }
    if (validCount == 3) {
      definedCars[carNum].set(carProperties[3], [true]);
    }
  }
}

function saveValidCars() {
  disabledCars = [];
  isCarDisabled = false;
  for (let carNum = 0; carNum < definedCars.length; carNum++) {
    stateCar = sessionStorage.getItem(definedCars[carNum].get(carProperties[4]))
      ? sessionStorage.getItem(definedCars[carNum].get(carProperties[4]))
      : false;
    if (eval(stateCar)) {
      if (!eval(definedCars[carNum].get(carProperties[3])[0])) {
        disabledCars.push(definedCars[carNum].get(carProperties[4])[0]);
        isCarDisabled = true;
      }
    }
    sessionStorage.setItem(
      definedCars[carNum].get(carProperties[4])[0],
      definedCars[carNum].get(carProperties[3])[0]
    );
  }
  if (isCarDisabled) {
    $("#txtDisabledCars").text(disabledCars);
    $("#modalDisabledCars").modal("show");
  }
  var voteCardsArray = [
    { placeInfo: { id: 42, desc: 'stuff 42' } },
    { placeInfo: { id: 65, desc: 'stuff 65' } },
    { placeInfo: { id: 89, desc: 'stuff 89' } },
];

//Abspeichern userDefined und in car config main page auslesen und in select richtig anzeigen
sessionStorage.myMap = JSON.stringify(Array.from(userDefinedCar[0].entries()));
map = new Map(JSON.parse(sessionStorage.myMap));
console.log(map)
}
