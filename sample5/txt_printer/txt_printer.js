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
    style = JSON.parse(localStorage.getItem("style"));
    console.log(style);
    color = localStorage.getItem("color");
    fontSize = localStorage.getItem("fontSize");
    font = localStorage.getItem("font");
    numWords = localStorage.getItem("numWords");

    document.getElementById("txt_content").innerHTML =
        "Font Styles:" + BRACE_LEFT + style + BRACE_RIGHT + LINE_BREAK +
        "Color: Color." + color.toUpperCase() + LINE_BREAK +
        "Font Size: " + fontSize + LINE_BREAK +
        "Font: " + font + LINE_BREAK +
        "Number of words: " + numWords;
}



