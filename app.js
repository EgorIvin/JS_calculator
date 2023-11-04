"use strict";

function submitForm(event) {
  const operation = event.target.innerText;
  console.log(operation);

  const input1 = Number(document.querySelector(".input1").value);
  const input2 = Number(document.querySelector(".input2").value);
  if (isNaN(input1) || isNaN(input2) || input1 === "" || input2 === "") {
    document.querySelector(".panel").innerText = "Введите числовые значения!";
    console.log("Incorrect data");
  } else {
    let res;
    switch (operation) {
      case "x":
        res = input1 * input2;
        document.querySelector(".panel").innerText = res.toFixed(2);
        break;
      case "+":
        res = input1 + input2;
        document.querySelector(".panel").innerText = res;
        break;
      case "-":
        res = input1 - input2;
        document.querySelector(".panel").innerText = res;
        break;
      case ":":
        if (input2 === 0) {
          document.querySelector(".panel").innerText = "На ноль делить нельзя!";
        } else {
          res = input1 / input2;
          document.querySelector(".panel").innerText = res;
        }

        break;
      default:
        alert("Неизвестная операция");
    }
  }
  document.querySelector(".input1").value = "";
  document.querySelector(".input2").value = "";
}
