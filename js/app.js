/*
1. Take value number from the btn
2. Add the value button in a new p tag
3. if there's another number add the number to the same p tag
4. if there's a math operator create a new p tag and separate the number
5. the new group of number added to a new p tag


*/
const colorModeToggle = document.querySelector("#colorModeToggle");
const bodyElement = document.querySelector("body");

const calculatorPattern = /^[0-9+\-*/.]+$/;
const mathOperators = /[\/\*\+\-=]/;
const operationElement = document.querySelector(".operation");
const inputForm = document.querySelector("#input--form");
const allButtons = document.querySelectorAll(".button");
const deleteButton = document.querySelector("#delete");
const acButton = document.querySelector("#AC");
const equalButton = document.querySelector("#equal");
const inputResult = document.querySelector("#result");

// Check if the input the user is typing is only numbers or mathematical operators
inputResult.addEventListener("input", () =>
  calculatorPattern.test(inputResult.value) ? "" : (inputResult.value = "")
);

// Check the input and format the input
// inputResult.addEventListener("input", () => {
//   const inputArr = inputResult.value.split("");

//   inputArr.forEach((value, index) => {
//     if (mathOperators.test(value)) {
//       inputArr[index] = ` ${value} `;
//     }
//   });

//   const inputString = inputArr.join(" ");

//   inputResult.value = inputString;
//   console.log(inputArr);
// });

// Delete last input
deleteButton.addEventListener("click", () => {
  // Convert the input result as an array to manipulate it
  const inputArr = inputResult.value.split("");
  inputArr.pop();

  const inputString = inputArr.join("");

  inputResult.value = inputString;
});

// Delete all the input value
acButton.addEventListener("click", () => {
  inputResult.value = "";
  return;
});

allButtons.forEach((button) => {
  // console.log(button);
  const buttonValue = button.dataset.value;

  // Add value into the input
  button.addEventListener("click", () => {
    if (
      buttonValue === "ac" ||
      buttonValue === "delete" ||
      buttonValue === "="
    ) {
      return;
    }

    inputResult.value += buttonValue;
  });
});

// Event listeners to invoke the calculation of the input
equalButton.addEventListener("click", calculate);
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculate();
});

// Calculate the input value
function calculate() {
  const result = eval(inputResult.value);
  if (result === undefined) {
    return;
  }

  operationElement.textContent = inputResult.value;
  inputResult.value = result;
}

// Change color mode
colorModeToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark--mode");

  if (!bodyElement.classList.contains("dark--mode")) {
    colorModeToggle.classList.remove("fa-sun");
    colorModeToggle.classList.add("fa-moon");
  }

  if (bodyElement.classList.contains("dark--mode")) {
    colorModeToggle.classList.remove("fa-moon");
    colorModeToggle.classList.add("fa-sun");
  }
});
