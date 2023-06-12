const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html"
const SLASH = "/"
const DEFAULT_COLOR = "black";
const DEFAULT_STYLE = "";
//let numWords = localStorage.getItem("numWords")? localStorage.getItem("numWords"):"50";

function changeFunctionality(btn) {
    let htmpage = btn.id.split(SPLIT_FIRST_UNDERSCORE)[1];
    path = location.pathname;
    console.log(window.location.hostname)
    console.log(path.replace(htmpage, ""));
    location.href = "../" + htmpage + SLASH + htmpage + HTML_ENDING;


}

function openSettingPage(btn) {

} 



function closeSettings() {
    //Save numeral system in storage
    selectorSys = document.getElementById("num_sys");
    numSys = selectorSys.options[selectorSys.selectedIndex].value;
    localStorage.setItem("numSys", numSys);

    //Save arithmetic in storage
    selectionArithmetic = document.querySelectorAll('input[name="arithmetic"]:checked');
    let selectedArithmetic = [];
    selectionArithmetic.forEach(element => {
        selectedArithmetic.push(element.id);
    });
    localStorage.setItem("arithmetic", JSON.stringify(selectedArithmetic));

    modal = document.getElementById("exampleModal");
    modal.modal.s
}





