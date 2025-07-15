let operand1 = "";
let operand2 = "";
let operator = null;
let calculationFinished = false;

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

// triggered by number inputs, newNum is a string that will be added to the operand
function updateOperand(newNum) {
    // if a calculation was already run, clear operands and operator for new input
    // calculationFinished is false by default, but gets set to true when running a calculation with evaluate()
    if (calculationFinished) {
        calculationFinished = false;
        clear();
    }

    if (operand1 === "" || operator === null) { // if either operand1 or operator are missing
        operand1 += newNum;
        display.textContent = operand1;
    } else {
        operand2 += newNum;
        display.textContent = operand2;
    }
}

// triggered by operator inputs
function updateOperator(newOperator) {
    if (operator === null || operand1 === "" || operand2 === "") { // if any operands or operator are missing
        operator = newOperator;
    } else {                                                       // if both operands and an operator are already defined
        operand1 = String(evaluate(operand1, operand2, operator)); // evaluate last expression and set operand1 to it
        operand2 = "";                                             // reset operand 2 

        operator = newOperator; 
        
        // override evaluate() setting calculationFinished to true to allow for operation chaining
        // this ensures the calculator isn't cleared while the user inputs operand2
        calculationFinished = false;
    }
}

function clear() {
    operand1 = "";
    operand2 = "";
    operator = null;

    display.textContent = "0";
}

function evaluate(op1, op2, currOperator) {
    op1 = parseFloat(op1);
    op2 = parseFloat(op2);

    if (currOperator === '+') {
        display.textContent = `${Math.round((op1 + op2) * 10000000000) / 10000000000}`;     // round to 10 places
        calculationFinished = true;
        return op1 + op2;
    } else if (currOperator === '-') {
        display.textContent = `${Math.round((op1 - op2) * 10000000000) / 10000000000}`;     // round to 10 places
        calculationFinished = true;
        return op1 - op2;
    } else if (currOperator === '*') {
        display.textContent = `${Math.round((op1 * op2) * 10000000000) / 10000000000}`;     // round to 10 places
        calculationFinished = true;
        return op1 * op2;
    } else if (currOperator === '/') {
        if (op2 === 0) {
            alert("Cannot divide by zero!");
            clear();
            return;
        } else {
            display.textContent = `${Math.round((op1 / op2) * 10000000000) / 10000000000}`; // round to 10 places
            calculationFinished = true;
            return op1 / op2;
        }
    }
}