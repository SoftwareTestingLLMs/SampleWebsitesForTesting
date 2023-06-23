const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const DEFAULT_COLOR = "black";
const DEFAULT_FIGURE = "tree";

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
  stateActivate = document.getElementById("activate");
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

  //Save style in storage
  selectionFigure = document.querySelectorAll('input[name="figure"]:checked');
  let selectedFigure = [];
  selectionFigure.forEach((element) => {
    selectedFigure.push(element.id);
  });
  localStorage.setItem("figure", JSON.stringify(selectedFigure));
}
