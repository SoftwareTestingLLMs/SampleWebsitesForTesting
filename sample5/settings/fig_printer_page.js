const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const DEFAULT_COLOR = "black";
const DEFAULT_FIGURE = "tree";
const stateActivate = document.getElementById("activate");

toggleSelection();

function changeFunctionality(btn) {
  let htmpage = btn.id.split(SPLIT_FIRST_UNDERSCORE)[1];
  path = location.pathname;
  console.log(window.location.hostname);
  console.log(path.replace(htmpage, ""));
  location.href = "../" + htmpage + SLASH + htmpage + HTML_ENDING;
}

function openSettingPage(btn) {}

function toggleSelection() {
  allColorRadios = document.querySelectorAll('input[name="color"]');
  allFigCbs = document.querySelectorAll('input[name="figure"]');
  allColorRadios.forEach((oneRadio) => {
    oneRadio.disabled = !stateActivate.checked;
  });

  allFigCbs.forEach((oneCB) => {
    oneCB.disabled = !stateActivate.checked;
  });
} 

function closeSettings() {
  //Save color in storage
  selectionColor = document.querySelector('input[name="color"]:checked');
  selectedColor = selectionColor ? selectionColor.value : DEFAULT_COLOR;
  localStorage.setItem("color", selectedColor);

  //Save status of figure printer in storage
  state =  stateActivate.checked?"visible":"hidden"
  localStorage.setItem("stateFigPrinter",state);

  //Save style in storage
  selectionFigure = document.querySelectorAll('input[name="figure"]:checked');
  let selectedFigure = [];
  selectionFigure.forEach((element) => {
    selectedFigure.push(element.value);
  });
  localStorage.setItem("figure", JSON.stringify(selectedFigure));
}
