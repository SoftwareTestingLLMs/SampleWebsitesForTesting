function heart() {
  let h = [];
  let string = "";

  for (var row = 0; row <= 5; row++) {
    for (var col = 0; col <= 6; col++) {
      if ((col % 3 != 0 && row == 0) || (col % 3 == 0 && row == 1)) {
        // document.write("* &nbsp");
        string += "*&nbsp";
    } else if (row - col == 2 || row + col == 8) {
        // document.write("* &nbsp");
        string += "*&nbsp";
      } else {
        // document.write("&nbsp &nbsp");
        string += "&nbsp &nbsp";
      }
    }
    // document.write("<br>");
    string += "<br>";
}
  return string;
}

function triangle() {
  let h = 5;
  tri= Array(h)
    .fill("*")
    .map(
      (s, i) =>
        " ".repeat(h - i - 1) +
        s
          .repeat(i + 1)
          .split("")
          .join(" ") +
        " ".repeat(h - i - 1)
    )
    .join("<br>");

    return tri.concat(["<br>"]);
}

function pyramid() {
  let n = 5;
  let string = "";
  // External loop
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      string += "&nbsp &nbsp";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      if (i === 1 || i === n) {
        string += "*&nbsp";
      } else {
        if (k === 0 || k === 2 * i - 2) {
          string += "*&nbsp";
        } else {
          string += "&nbsp &nbsp";
        }
      }
    }
    string += "<br>";
  }
  return string;
}

function diamond() {
  let n = 5;
  let string = "";
  // Upside pyramid
  for (let i = 1; i <= n; i++) {
    // printing spacres
    for (let j = n; j > i; j--) {
      string += "&nbsp &nbsp";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
      string += "*&nbsp";
    }
    string += "<br>";
  }
  // downside pyramid
  for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      string += "&nbsp &nbsp";
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
      string += "*&nbsp";
    }
    string += "<br>";
  }
  return string;
}