var display = document.getElementById("display");
var button = document.getElementsByClassName("buttons");

var op1 = 0;
var op2 = 0;
var operator = null;

function isFloat(value) {
  if (
    typeof value === "number" &&
    !Number.isNaN(value) &&
    !Number.isInteger(value)
  ) {
    return true;
  }

  return false;
}

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");

    if (value === "reset") {
      operator = null;
      display.innerText = null;
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "%"
    ) {
      operator = value;
      op1 = parseFloat(display.innerText);
      display.innerText = null;
    } else if (value === "=") {
      if (operator != null) {
        op2 = parseFloat(display.innerText);
        var result = eval(op1 + " " + operator + " " + op2);

        if (isFloat(result)) {
          result = result.toFixed(2);
        }
        display.innerText = result;
      } else {
        display.innerText = "Error";
      }
    } else if (value === "sign") {
      display.innerText = eval(parseFloat(display.innerText) * -1);
    } else {
      display.innerText += value;
    }
  });
}
