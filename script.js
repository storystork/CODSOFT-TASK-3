console.log('Script loaded');

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let output = "";


function calculate(btnValue) {

  if (btnValue === "=") {
    if (output !== "") {
      try {
        output = eval(output.replace("%", "/100"));
      } catch (error) {
        output = "Error";
      }
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "C") {
    output = output.slice(0, -1);
  } else {
    if (output === "" && ["%", "*", "/", "-", "+", "="].includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
}

buttons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    console.log('Button clicked:', e.target.value); 
    calculate(e.target.value); 
  });
});

