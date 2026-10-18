// Task 5: use the mouseover and mouseout events from the assignment.
const hoverBox = document.getElementById("hover-box");

function highlightBox() {
  hoverBox.style.backgroundColor = "#c9e8ff";
}

function restoreBox() {
  hoverBox.style.backgroundColor = "";
}

hoverBox.addEventListener("mouseover", highlightBox);
hoverBox.addEventListener("mouseout", restoreBox);

// Task 6: copy the current value after a key is released.
const liveInput = document.getElementById("live-input");
const liveOutput = document.getElementById("live-output");

function showCurrentText() {
  liveOutput.textContent = liveInput.value;
}

liveInput.addEventListener("keyup", showCurrentText);

// Task 7: validate both fields before doing arithmetic.
const firstNumberInput = document.getElementById("first-number");
const secondNumberInput = document.getElementById("second-number");
const calculatorResult = document.getElementById("calculator-result");

function calculate(operation) {
  if (firstNumberInput.validity.badInput || secondNumberInput.validity.badInput) {
    calculatorResult.textContent = "Please enter valid numbers.";
    return;
  }

  // Check empty strings before conversion: Number("") would return 0.
  if (firstNumberInput.value.trim() === "" || secondNumberInput.value.trim() === "") {
    calculatorResult.textContent = "Please enter both numbers.";
    return;
  }

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    calculatorResult.textContent = "Please enter valid numbers.";
    return;
  }

  let result;
  if (operation === "addition") {
    result = firstNumber + secondNumber;
  } else if (operation === "subtraction") {
    result = firstNumber - secondNumber;
  } else if (operation === "multiplication") {
    result = firstNumber * secondNumber;
  } else if (operation === "division") {
    if (secondNumber === 0) {
      calculatorResult.textContent = "Cannot divide by zero.";
      return;
    }
    result = firstNumber / secondNumber;
  }

  if (!Number.isFinite(result)) {
    calculatorResult.textContent = "The result is too large. Try smaller numbers.";
    return;
  }

  calculatorResult.textContent = "Result: " + result;
}

document.getElementById("add-numbers").addEventListener("click", function () {
  calculate("addition");
});

document.getElementById("subtract-numbers").addEventListener("click", function () {
  calculate("subtraction");
});

document.getElementById("multiply-numbers").addEventListener("click", function () {
  calculate("multiplication");
});

document.getElementById("divide-numbers").addEventListener("click", function () {
  calculate("division");
});
