let result = document.getElementById("result");

function appendChar(char) {
    result.value += char;
}

function clearResult() {
    result.value = "";
}

function deleteLastChar() {
    result.value = result.value.slice(0, -1);
}

function toggleNegative() {
    result.value = result.value.startsWith("-") ? result.value.slice(1) : "-" + result.value;
}

function calculateSquareRoot() {
    result.value = Math.sqrt(parseFloat(result.value));
}

function calculatePower() {
    result.value = Math.pow(parseFloat(result.value), 2);
}

function calculateFactorial() {
    let num = parseInt(result.value);
    if (Number.isInteger(num) && num >= 0) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        result.value = factorial;
    } else {
        result.value = "Error";
    }
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}