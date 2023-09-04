const selectNumSys = document.getElementById("num_sys");

maintainState();

function checkReq() {
  selectionArithmetic = document.querySelectorAll(
    'input[name="arithmetic"]:checked'
  );
  if (selectionArithmetic.length == 0) {
    $("#modalMinimu").modal("show");
    $("#btn_modal_close").on("click", function () {
      $("#minArithmetic option").prop("selected", function () {
        return this.defaultSelected;
      });
    });

    $("#minArithmetic").on("change", function () {
      sel = $("#minArithmetic option:selected").val();
      txtman = $("#minArithmetic option:selected").text();
      minAritmetic = document.getElementById(txtman.toLowerCase());
      minAritmetic.checked = true;
    });
  }
}
function saveNumSys() {
  //Save numeral system in storage
  selectorSys = document.getElementById("num_sys");
  numSys = selectorSys.options[selectorSys.selectedIndex].value;
  sessionStorage.setItem("numSys", numSys);
}

function saveAritmetic() {
  //Save arithmetic in storage
  selectionArithmetic = document.querySelectorAll(
    'input[name="arithmetic"]:checked'
  );
  let selectedArithmetic = [];
  selectionArithmetic.forEach((element) => {
    selectedArithmetic.push(element.id);
  });
  sessionStorage.setItem("arithmetic", JSON.stringify(selectedArithmetic));
}

function maintainState() {
  aritmethic = JSON.parse(sessionStorage.getItem("arithmetic"))
    ? JSON.parse(sessionStorage.getItem("arithmetic"))
    : ["addition"];
  numSys = sessionStorage.getItem("numSys")
    ? sessionStorage.getItem("numSys")
    : "decimal";
  console.log(numSys);
  selectNumSys.value = numSys;

  for (
    let arithmeticNum = 0;
    arithmeticNum < aritmethic.length;
    arithmeticNum++
  ) {
    document.getElementById(aritmethic[arithmeticNum]).checked = true;
  }
}
