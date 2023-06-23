const SPLIT_FIRST_UNDERSCORE = /_(.*)/s;
const HTML_ENDING = ".html"
const SLASH = "/"
const content = [12, "This is a Text"];
const BRACE_LEFT = "[";
const BRACE_RIGHT = "]";
const LINE_BREAK = "<br>";

function changeFunctionality(btn) {
    let htmpage = btn.id.split(SPLIT_FIRST_UNDERSCORE)[1];
    path = location.pathname;
    console.log(window.location.hostname)
    console.log(path.replace(htmpage, ""));
    location.href = "../" + htmpage + SLASH + htmpage + HTML_ENDING;


}

function printText() {
    style = JSON.parse(localStorage.getItem("figure"))?JSON.parse(localStorage.getItem("figure")):[];
    color = localStorage.getItem("color")?localStorage.getItem("color"):"black";

    
}



