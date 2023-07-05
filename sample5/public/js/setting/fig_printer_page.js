const DEFAULT_COLOR = "black";
const DEFAULT_FIGURE = "tree";
const stateActivate = document.getElementById("activate");

toggleSelection();


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
  sessionStorage.setItem("color", selectedColor);

  //Save status of figure printer in storage
  state =  stateActivate.checked?"visible":"hidden"
  sessionStorage.setItem("stateFigPrinter",state);

  //Save style in storage
  selectionFigure = document.querySelectorAll('input[name="figure"]:checked');
  let selectedFigure = [];
  selectionFigure.forEach((element) => {
    selectedFigure.push(element.value);
  });
  sessionStorage.setItem("figure", JSON.stringify(selectedFigure));
}
