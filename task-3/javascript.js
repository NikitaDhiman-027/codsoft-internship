let currentInput = '';
    let operator = '';
    let previousInput = '';

    function inputDigit(digit) {
        if (operator && previousInput === '') {
            previousInput = currentInput;
            currentInput = digit;
        } else {
            currentInput += digit;
        }
        updateDisplay();
    }

    function inputOperator(op) {
        if (currentInput !== '') {
            operator = op;
            previousInput = currentInput;
            currentInput = '';
        }
    }

    function clearDisplay() {
        currentInput = '';
        operator = '';
        previousInput = '';
        updateDisplay();
    }

    function toggleSign() {
        if (currentInput !== '') {
            currentInput = String(-parseFloat(currentInput));
            updateDisplay();
        }
    }

    function calculateResult() {
        if (previousInput !== '' && currentInput !== '' && operator !== '') {
            currentInput = String(eval(previousInput + operator + currentInput));
            operator = '';
            previousInput = '';
            updateDisplay();
        }
    }

    function updateDisplay() {
        document.getElementById('display').value = currentInput;
    }