const DEFAULT_COLOR = "black";
const DEFAULT_STYLE = "";
const selectorNumber = document.getElementById("number");
const selectorFontSize = document.getElementById("font_size");
const selectorFont = document.getElementById("font");
let previousColor = "";

maintainState();

function saveNumber() {
  //Save number of words in storage
  numberInput = selectorNumber.options[selectorNumber.selectedIndex].text;
  sessionStorage.setItem("numWords", numberInput);
}

function saveFontSize() {
  //Save font size in storage
  fontSize = selectorFontSize.options[selectorFontSize.selectedIndex].text;
  sessionStorage.setItem("fontSize", fontSize);
}

function saveFont() {
  //Save font in storage
  font = selectorFont.options[selectorFont.selectedIndex].text;
  sessionStorage.setItem("font", font);
}

function saveColor() {
  //Save color in storage
  selectionColor = document.querySelector('input[name="color"]:checked');
  selectedColor = selectionColor ? selectionColor.value : DEFAULT_COLOR;
  previousColor = sessionStorage.getItem("color")
  ? sessionStorage.getItem("color")
  : "black";
  sessionStorage.setItem("color", selectedColor);
}

function saveStyle() {
  //Save style in storage
  selectionStyle = document.querySelectorAll('input[name="style"]:checked');
  let selectedStyle = [];
  selectionStyle.forEach((element) => {
    selectedStyle.push(element.id);
  });
  sessionStorage.setItem("style", JSON.stringify(selectedStyle));
}

function maintainState() {
  style = JSON.parse(sessionStorage.getItem("style"))
    ? JSON.parse(sessionStorage.getItem("style"))
    : [];
  color = sessionStorage.getItem("color")
    ? sessionStorage.getItem("color")
    : "black";
  fontSize = sessionStorage.getItem("fontSize")
    ? sessionStorage.getItem("fontSize")
    : "12";
  font = sessionStorage.getItem("font")
    ? sessionStorage.getItem("font")
    : "DejaVu Sans";
  numWords = sessionStorage.getItem("numWords")
    ? sessionStorage.getItem("numWords")
    : "50";

  selectorNumber.value = numWords;
  selectorFontSize.value = fontSize;
  selectorFont.value = font;
  cbColor = document.getElementById(color);
  cbColor.checked = true;
  for (let styleNum = 0; styleNum < style.length; styleNum++) {
    document.getElementById(style[styleNum]).checked = true;
  }
}

function displayModul() {
  $("#modalGreenSelected").modal("show");
}

function setColorBack() {
 
  cbColor = document.getElementById(previousColor);
  cbColor.checked = true;
  console.log(previousColor)

}
