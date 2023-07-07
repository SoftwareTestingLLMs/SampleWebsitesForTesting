const DEFAULT_COLOR = "black";
const DEFAULT_FIGURE = "tree";
const stateActivate = document.getElementById("activate");

toggleSelection();
maintainState();

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

function saveColor() {
  //Save color in storage
  selectionColor = document.querySelector('input[name="color"]:checked');
  selectedColor = selectionColor ? selectionColor.value : DEFAULT_COLOR;
  sessionStorage.setItem("color", selectedColor);
}
function saveState() {
  //Save status of figure printer in storage
  state = stateActivate.checked ? "visible" : "hidden";
  sessionStorage.setItem("stateFigPrinter", state);
}
function saveFig() {
  //Save style in storage
  selectionFigure = document.querySelectorAll('input[name="figure"]:checked');
  let selectedFigure = [];
  selectionFigure.forEach((element) => {
    selectedFigure.push(element.value);
  });
  sessionStorage.setItem("figure", JSON.stringify(selectedFigure));
}

function maintainState() {
  figure = JSON.parse(sessionStorage.getItem("figure"))
    ? JSON.parse(sessionStorage.getItem("figure"))
    : [];
  color = sessionStorage.getItem("color")
    ? sessionStorage.getItem("color")
    : "black";
  activate = sessionStorage.getItem("stateFigPrinter")
    ? sessionStorage.getItem("stateFigPrinter")
    : "hidden";

  color = document.getElementById(color);
  color.checked = true;
  isFigPrinterActivated = document.getElementById("activate");
  if(activate=="visible"){
    isFigPrinterActivated.checked = true;
    toggleSelection()
  }else{
    console.log("hid")
    isFigPrinterActivated.checked = false;
    toggleSelection()

  }


  for (let figNum = 0; figNum < figure.length; figNum++) {
    document.getElementById(figure[figNum]).checked = true;
  }
}
