function calculate() {
    const a = getNumberValue('.number1');
    const b = getNumberValue('.number2');
    const operation = document.querySelector("select").value;
    const result = computeResult(a, b, operation);
    document.querySelector(".result").innerHTML = result;
}

function getNumberValue(selector) {
    return parseInt(document.querySelector(selector).value);
}

function computeResult(leftNumber, rightNumber, sign) {
    if(sign === "+") {
        return leftNumber + rightNumber;
    } else if(sign === "-") {
        return leftNumber - rightNumber;
    } else if(sign === "*") {
        return leftNumber * rightNumber;
    } else if(sign === "/") {
        return leftNumber / rightNumber;
    }
}