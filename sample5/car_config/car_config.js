const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const GO_UP_ONE_DIR = "../";
const carFirstLetter = 'abcdefghijklmnopqrstuvwxyz'.split('');
let i = 0;
let definedCars = [];
const carProperties = ["Tire", "Interior", "Engine", "Valid", "Name"];
let counterDisplayCarProp = 0;
let basedCar = "";
const DIV = "_div"
let selectedTire = "";
let selectedInterior = "";
let selectedEngine = "";

getValidCars();
addValidCars();


function changeFunctionality(btn) {
    let htmpage = btn.id.split(SPLIT_FIRST_UNDERSCORE)[1];
    path = location.pathname;
    location.href = GO_UP_ONE_DIR + htmpage + SLASH + htmpage + HTML_ENDING;


}

function getValidCars() {
    for (let carNum = 0; carNum < carFirstLetter.length; carNum++) {
        carArrays = JSON.parse(localStorage.getItem(carFirstLetter[carNum]));
        if (carArrays) {
            definedCars[i] = new Map(carArrays);
            i++;
        }
    }
}

function addValidCars() {
    selectorModel = document.getElementById("Model");
    selectorModel.length = 0;
    for (let carNum = 0; carNum < definedCars.length; carNum++) {
        option = document.createElement("option");
        option.text = definedCars[carNum].get(carProperties[4]);
        selectorModel.add(option);
    }
}

function selectedCar() {
    selectorModel = document.getElementById("Model");
    carName = selectorModel.options[selectorModel.selectedIndex].text;

    for (let carNum = 0; carNum < definedCars.length; carNum++) {
        if (definedCars[carNum].get(carProperties[4]) == carName) {
            basedCar = definedCars[carNum];
            break;
        }
    }
    resetConfig()
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
    configs = document.getElementsByClassName('car_config_selec');
    for (let i = 0; i < configs.length; i++) {
        if (configs[i].id == elementName) {
            return configs[i + 1].id;
        }
    }
}

function displayResultConfig() {
    resultConfig = [];
    resultConfig.push([["Selected Car"], basedCar.get(carProperties[4])]);
    for (let propNum = 0; propNum < carProperties.length - 2; propNum++) {
        selector = document.getElementById(carProperties[propNum]);
        value = selector.options[selector.selectedIndex].text;
        resultConfig.push([[carProperties[propNum]], [value]])
    }
    console.log(resultConfig)
}

function resetConfig(){
    for (let propNum = 0; propNum < carProperties.length-2; propNum++) {
        configProp = document.getElementById(carProperties[propNum] + DIV);
        configProp.style.display = "none";
    }
    configBtn = document.getElementById("btn_display_config");
    configBtn.style.display = "none";


}
