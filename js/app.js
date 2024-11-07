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

const allButtons = document.querySelectorAll(".button");
const deleteButton = document.querySelector("#delete");
const acButton = document.querySelector("#AC");
const inputResult = document.querySelector("#result");

// Check if the input the user is typing is only numbers or mathematical operators
inputResult.addEventListener("input", checkPattern);

// Delete last input
deleteButton.addEventListener("click", () => {
  // Convert the input result as an array to manipulate it
  const inputArr = inputResult.value.split("");
  inputArr.pop();

  const inputString = inputArr.toString();

  inputResult.value = inputString.replaceAll(",", "");
});

// Delete all the input value
acButton.addEventListener("click", () => {
  inputResult.value = "";
  return;
});

allButtons.forEach((button) => {
  // console.log(button);
  const buttonValue = button.dataset.value;
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

  // console.log(button.dataset.value);
});

function checkPattern() {
  calculatorPattern.test(inputResult.value) ? "" : (inputResult.value = "");
}

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
