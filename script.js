const display = document.getElementById("display");
const toggle = document.getElementById("toggle");
const calNum1 = [];
const calNum2 = [];
const calOperator = [];
let lastOperator;


function calculateResult() {
    let result;
    calNum2.push(display.value);
    clearDisplay();

    let num1 = Number(calNum1[calNum1.length - 1]);
    let num2 = Number(calNum2[calNum2.length - 1]);
    let operator = calOperator[calOperator.length - 1];

    if (operator === '+') result = num1 + num2;
    else if (operator === '-') result = num1 - num2;
    else if (operator === '*') result = num1 * num2;
    else if (operator === '/') result = num1 / num2;
    else if (operator === '%') result = num1 % num2;

    display.value = result;

    calOperator.pop();
    calNum1.pop();
    calNum2.pop();
    lastOperator = null;
}


function appendToOperatorDisplay(val) {
    if (display.value !== "" && val !== lastOperator) {
        calNum1.push(display.value);
        clearDisplay();
        calOperator.push(val);
        lastOperator = val;
    }
}


function clearDisplay() {
    display.value = "";

}

function singleClear() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(val) {
    display.value += val;
    lastOperator = null;
}

toggle.addEventListener('change', function () {
    document.body.classList.toggle('light');
});