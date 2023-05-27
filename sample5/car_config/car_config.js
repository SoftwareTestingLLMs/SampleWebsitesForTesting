const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const GO_UP_ONE_DIR = "../";
const carFirstLetter = 'abcdefghijklmnopqrstuvwxyz'.split('');
let i =0;
let definedCars =[];


getValidCars();

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


function printText() {
    document.getElementById("txt_content").innerHTML = localStorage.getItem("modelInput");
}

function displayConfig() {
    selectorModel = document.getElementById("model");
    modelInput = selectorModel.options[selectorModel.selectedIndex].text;
    localStorage.setItem('modelInput', modelInput);
}

