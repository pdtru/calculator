class Calculator {
    constructor(previousScreenText, currentScreenText) {
        this.previousScreenText = previousScreenText;
        this.currentScreenText = currentScreenText;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }

    backspace() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand + number;
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand != '') {
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {

    }

    updateDisplay() {
        this.currentScreenText.innerText = this.currentOperand;
        this.previousScreenText.innerText = this.previousOperand;
    }

}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation');
const equalsButton = document.querySelector('[data-equals]');
const backspaceButton = document.querySelector('[data-backspace]');
const clearButton = document.querySelector('[data-clear]');
const previousScreenText = document.querySelector('[data-screen-previous]');
const currentScreenText = document.querySelector('[data-screen-current]');

const calculator = new Calculator(previousScreenText, currentScreenText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

