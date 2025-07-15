let operand1 = "";
let operand2 = "";
let operator = null;
let calculationFinished = false;

// --------------------- DEFINE BUTTON VARIABLES ---------------------

const display = document.querySelector("span");
const plusBtn = document.querySelector("#add");
const minusBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalsBtn = document.querySelector("#equals");
const acBtn = document.querySelector("#ac-btn");

// --------------------- DEFINE EVENT LISTENERS ---------------------

// get all numeric buttons and add event listeners to update operands when clicked
for (let i = 0; i <= 9; i++) {
    document.querySelector(`#btn${i}`).addEventListener("click", () => updateOperand(`${i}`));
}

acBtn.addEventListener("click", clear);

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
    if (op1 === "" || op2 === "" || currOperator === null) {
        alert("Please enter two operands and an operator!");
        clear();
        return;
    }

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