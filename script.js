let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function calculate() {
  try {
    let result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}
