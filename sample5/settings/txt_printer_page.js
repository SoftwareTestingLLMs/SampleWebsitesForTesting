const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html"
const SLASH = "/"
const DEFAULT_COLOR="black";
const DEFAULT_STYLE="";
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
    //Save number of words in storage
    selectorNumber = document.getElementById("number");
    numberInput = selectorNumber.options[selectorNumber.selectedIndex].text;
    localStorage.setItem("numWords", numberInput);
    console.log(localStorage.getItem("numWords"));

    //Save font size in storage
    selectorFontSize = document.getElementById("font_size");
    fontSize = selectorFontSize.options[selectorFontSize.selectedIndex].text;
    localStorage.setItem("fontSize", fontSize);
    console.log(localStorage.getItem("fontSize"));

    //Save font in storage
    selectorFont = document.getElementById("font");
    font = selectorFont.options[selectorFont.selectedIndex].text;
    localStorage.setItem("font", font);
    console.log(localStorage.getItem("font"));

    //Save color in storage
    selectionColor = document.querySelector('input[name="color"]:checked');
    selectedColor = selectionColor ? selectionColor.value : DEFAULT_COLOR;
    localStorage.setItem("color",selectedColor)

     //Save style in storage
     selectionStyle = document.querySelectorAll('input[name="style"]:checked');
     let selectedStyle = [];
     selectionStyle.forEach(element => {
        selectedStyle.push(element.id);
     });
     localStorage.setItem("style",JSON.stringify(selectedStyle));
}



