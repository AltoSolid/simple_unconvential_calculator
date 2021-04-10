const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, result) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: result,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'add' &&
        calculationType !== 'subtract' &&
        calculationType !== 'multiply' &&
        calculationType !== 'divide' || !enteredNumber
    ) {
        return;
    }

    const initialValue = currentResult;
    let mathOperator;
    if (calculationType === 'add') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'subtract') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'multiply') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'divide') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialValue, enteredNumber);
    writeToLog(calculationType, initialValue, enteredNumber, currentResult);
}

function addNumbers() {
    calculateResult('add');
}

function subtractNumbers() {
    calculateResult('subtract');
}

function multiplyNumbers() {
    calculateResult('multiply');
}

function divideNumbers() {
    calculateResult('divide');
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtractNumbers);
multiplyBtn.addEventListener('click', multiplyNumbers);
divideBtn.addEventListener('click', divideNumbers);