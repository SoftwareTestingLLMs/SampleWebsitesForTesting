const DEFAULT_COLOR = "black";
const DEFAULT_STYLE = "";

function openSettingPage(btn) {}

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

function closeSettings() {
  //Save numeral system in storage
  selectorSys = document.getElementById("num_sys");
  numSys = selectorSys.options[selectorSys.selectedIndex].value;
  sessionStorage.setItem("numSys", numSys);

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
