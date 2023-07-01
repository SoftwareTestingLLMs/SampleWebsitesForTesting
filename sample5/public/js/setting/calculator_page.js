const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html";
const SLASH = "/";
const DEFAULT_COLOR = "black";
const DEFAULT_STYLE = "";

function changeFunctionality(btn) {
  let htmpage = btn.id.split(SPLIT_FIRST_UNDERSCORE)[1];
  path = location.pathname;
  console.log(window.location.hostname);
  console.log(path.replace(htmpage, ""));
  location.href = "../" + htmpage + SLASH + htmpage + HTML_ENDING;
}

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
  localStorage.setItem("numSys", numSys);

  //Save arithmetic in storage
  selectionArithmetic = document.querySelectorAll(
    'input[name="arithmetic"]:checked'
  );
  let selectedArithmetic = [];
  selectionArithmetic.forEach((element) => {
    selectedArithmetic.push(element.id);
  });
  localStorage.setItem("arithmetic", JSON.stringify(selectedArithmetic));
}
