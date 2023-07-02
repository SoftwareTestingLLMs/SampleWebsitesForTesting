const DEFAULT_COLOR="black";
const DEFAULT_STYLE="";


function closeSettings() {
    //Save number of words in storage
    selectorNumber = document.getElementById("number");
    numberInput = selectorNumber.options[selectorNumber.selectedIndex].text;
    sessionStorage.setItem("numWords", numberInput);

    //Save font size in storage
    selectorFontSize = document.getElementById("font_size");
    fontSize = selectorFontSize.options[selectorFontSize.selectedIndex].text;
    sessionStorage.setItem("fontSize", fontSize);

    //Save font in storage
    selectorFont = document.getElementById("font");
    font = selectorFont.options[selectorFont.selectedIndex].text;
    sessionStorage.setItem("font", font);
    console.log(sessionStorage.getItem("font"));

    //Save color in storage
    selectionColor = document.querySelector('input[name="color"]:checked');
    selectedColor = selectionColor ? selectionColor.value : DEFAULT_COLOR;
    sessionStorage.setItem("color",selectedColor)

     //Save style in storage
     selectionStyle = document.querySelectorAll('input[name="style"]:checked');
     let selectedStyle = [];
     selectionStyle.forEach(element => {
        selectedStyle.push(element.id);
     });
     sessionStorage.setItem("style",JSON.stringify(selectedStyle));
}



