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

function algo() {
  addConfigProp();
  console.log("Valid page: ");
  console.log(determineValidCars());
  // saveValidCars();
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

function determineValidCars() {
  for (let carNum = 0; carNum < userDefinedCar.length; carNum++) {
    definedCars[carNum].set(carProperties[3], [true]);
    for (let propNum = 0; propNum < carProperties.length - 2; propNum++) {
      if (definedCars[carNum].get(carProperties[propNum]).length == 0) {
        definedCars[carNum].set(carProperties[3], [false]);
      }
    }
  }
  return definedCars.filter((car) => car.get(carProperties[3]).includes(true));
}

function saveValidCars() {
  deleteSavedCars();
  for (let carNum = 0; carNum < definedCars.length; carNum++) {
    console.log(definedCars[carNum].get(carProperties[4])[0])
    localStorage.setItem(
      definedCars[carNum].get(carProperties[4])[0],
      definedCars[carNum].get(carProperties[3])[0]
    );
  }
}

function deleteSavedCars() {
  for (let carNum = 0; carNum < userDefinedCar.length; carNum++) {
    let carName = userDefinedCar[carNum].get(carProperties[4])[0];
    console.log(carName);
    localStorage.removeItem(carName);
  }
}
