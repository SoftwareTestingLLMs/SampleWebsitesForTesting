const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const GO_UP_ONE_DIR = "../";
const carFirstLetter = 'abcdefghijklmnopqrstuvwxyz'.split('');
let i =0;
let definedCars =[];
const carProperties = ["Tire", "Interior", "Engine", "Valid", "Name"];
let displayCarProperties = 0;

getValidCars();
addValidCars();


function changeFunctionality(btn) {
    let htmpage = btn.id.split(SPLIT_FIRST_UNDERSCORE)[1];
    path = location.pathname;
    location.href = GO_UP_ONE_DIR + htmpage + SLASH + htmpage + HTML_ENDING;


}

function getValidCars(){
    for (let carNum = 0; carNum < carFirstLetter.length; carNum++) {
        carArrays = JSON.parse(localStorage.getItem(carFirstLetter[carNum]));
        if(carArrays){
            definedCars[i] = new Map(carArrays);
            i++;
        }
    }
}

function addValidCars(){
    for (let carNum = 0; carNum < definedCars.length; carNum++) {
        selectorModel = document.getElementById("model");
        option = document.createElement("option");
        option.text = definedCars[carNum].get(carProperties[4]);
        selectorModel.add(option);        
    }
}

function addOption(){
    console.log("ss");

}

function displayPropConfig(){
    
}
