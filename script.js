var curentvalues = '';

function appendValue(value) {
  curentvalues += value;
  document.querySelector('.input_box').value = curentvalues;
}

function clearDisplay() {
  curentvalues = '';
  document.querySelector('.input_box').value = curentvalues;
}

function calculateResult() {
  try {
    // Use eval() to calculate the result
    let result = eval(curentvalues);
    curentvalues = result.toString(); // Convert the result to a string
    document.querySelector('.input_box').value = curentvalues;
  } catch (error) {
    document.querySelector('.input_box').value = 'Error';
    curentvalues = '';
  }
}

function calculateRoot() {
  try {
    let result = Math.sqrt(eval(curentvalues)); // Calculate square root
    curentvalues = result.toString(); // Convert the result to a string
    document.querySelector('.input_box').value = curentvalues;
  } catch (error) {
    document.querySelector('.input_box').value = 'Error';
    curentvalues = '';
  }
}

function backspace() {
  // Remove the last character from curentvalues
  curentvalues = curentvalues.slice(0, -1);
  document.querySelector('.input_box').value = curentvalues;
}
