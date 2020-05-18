function calculate() {
    const a = parseInt(document.querySelector(".number1").value);
    const b = parseInt(document.querySelector(".number2").value);
    const operation = document.querySelector("select").value;

    if(operation === "+") {
        const result = a + b;
        document.querySelector(".result").innerHTML = result;
    } else if(operation === "-") {
        const result = a - b;
        document.querySelector(".result").innerHTML = result;
    } else if(operation === "*") {
        const result = a * b;
        document.querySelector(".result").innerHTML = result;
    } else if(operation === "/") {
        const result = a / b;
        document.querySelector(".result").innerHTML = result;
    }
}