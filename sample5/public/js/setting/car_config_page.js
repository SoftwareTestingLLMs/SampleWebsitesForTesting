const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html"
const SLASH = "/"
const DEFAULT_COLOR = "black";
const DEFAULT_STYLE = "";
let selectedTires = [];
let selectedInteriors = [];
let selectedEngines = [];
let selectedCarProp = [selectedTires, selectedInteriors, selectedEngines]




function calcProp() {
    //Save tires in storage
    selectionTire = document.querySelectorAll('input[name="tire"]:checked');
    selectedTires.splice(0, selectedTires.length);
    selectionTire.forEach(element => {
        selectedTires.push(element.value);

    });
    console.log(selectedTires)
    //Save interior in storage
    selectedInteriors.splice(0, selectedInteriors.length);
    selectionInterior = document.querySelectorAll('input[name="interior"]:checked');
    selectionInterior.forEach(element => {
        selectedInteriors.push(element.id);
    });

    //Save engine in storage
    selectedEngines.splice(0, selectedEngines.length);
    selectionEngine = document.querySelectorAll('input[name="engine"]:checked');
    selectionEngine.forEach(element => {
        selectedEngines.push(element.value);
    });

    addConfigProp();

    determineInvalidCars();
}

function closeSettings(){
    saveValidCars();
}





