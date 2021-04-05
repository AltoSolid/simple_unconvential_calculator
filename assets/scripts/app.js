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

function addNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialValue = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialValue, enteredNumber);
    writeToLog('add', initialValue, enteredNumber, currentResult);
}

function subtractNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialValue = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialValue, enteredNumber);
    writeToLog('subtract', initialValue, enteredNumber, currentResult);
}

function multiplyNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialValue = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialValue, enteredNumber);
    writeToLog('multiply', initialValue, enteredNumber, currentResult);

}

function divideNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialValue = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialValue, enteredNumber);
    writeToLog('divide', initialValue, enteredNumber, currentResult);
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtractNumbers);
multiplyBtn.addEventListener('click', multiplyNumbers);
divideBtn.addEventListener('click', divideNumbers);