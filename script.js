let operand1 = "";
let operand2 = "";
let operator = null;

// --------------------- DEFINE BUTTON VARIABLES ---------------------

const display = document.querySelector("span");

const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");

const plusBtn = document.querySelector("#add");
const minusBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalsBtn = document.querySelector("#equals");

const acBtn = document.querySelector("#ac-btn");

// --------------------- DEFINE EVENT LISTENERS ---------------------

acBtn.addEventListener("click", clear);

zeroBtn.addEventListener("click", () => updateOperand('0'));
oneBtn.addEventListener("click", () => updateOperand('1'));
twoBtn.addEventListener("click", () => updateOperand('2'));
threeBtn.addEventListener("click", () => updateOperand('3'));
fourBtn.addEventListener("click", () => updateOperand('4'));
fiveBtn.addEventListener("click", () => updateOperand('5'));
sixBtn.addEventListener("click", () => updateOperand('6'));
sevenBtn.addEventListener("click", () => updateOperand('7'));
eightBtn.addEventListener("click", () => updateOperand('8'));
nineBtn.addEventListener("click", () => updateOperand('9'));

plusBtn.addEventListener("click", () => updateOperator('+'));
minusBtn.addEventListener("click", () => updateOperator('-'));
multiplyBtn.addEventListener("click", () => updateOperator('*'));
divideBtn.addEventListener("click", () => updateOperator('/'));

equalsBtn.addEventListener("click", () => evaluate(operand1, operand2, operator));

// newNum is a string that will be added to the operand
function updateOperand(newNum) {
    if (operator == null) {
        operand1 += newNum;
        display.textContent = operand1;
    } else {
        operand2 += newNum;
        display.textContent = operand2;
    }
}

function updateOperator(newOperator) {
    operator = newOperator;
}

function clear() {
    operand1 = "";
    operand2 = "";
    operator = null;

    display.textContent = "0";
}

function evaluate(operand1, operand2, operator) {
    operand1 = parseInt(operand1);
    operand2 = parseInt(operand2);

    if (operator === '+') {
        display.textContent = `${operand1 + operand2}`;
    } else if (operator === '-') {
        display.textContent = `${operand1 - operand2}`;
    } else if (operator === '*') {
        display.textContent = `${operand1 * operand2}`;
    } else if (operator === '/') {
        display.textContent = `${operand1 / operand2}`;
    }
}

function add(operand1, operand2) {
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    return operand1 / operand2;
}