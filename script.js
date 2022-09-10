// Functions
const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = '';
}

function operate(a,b) {
    let op = new Array ('+', '-', 'x', '/');

    let insideScreen = document.getElementById('result').value;

    if (insideScreen.includes('+')) {
        parts = insideScreen.split(`${op[0]}`)
        a = Number(parts[0]);
        b = Number(parts[1]);

        let result = add(a, b);
        document.getElementById('result').value = result;
    } else if (insideScreen.includes('-')) {
        parts = insideScreen.split(`${op[1]}`)
        a = Number(parts[0]);
        b = Number(parts[1]);

        let result = subtract(a, b);   
        document.getElementById('result').value = result;
    } else if (insideScreen.includes('x')) {
        parts = insideScreen.split(`${op[2]}`)
        a = Number(parts[0]);
        b = Number(parts[1]);

        let result = multiply(a, b);
        document.getElementById('result').value = result;
    } else {
        parts = insideScreen.split(`${op[3]}`)
        a = Number(parts[0]);
        b = Number(parts[1]);

        let result = divide(a, b);
        document.getElementById('result').value = result;
    }
}

function newCalc(a) {
    if (insideScreen.includes('+'||'-'||'x'||'/')) {
        insideScreen === a;
        operate();
    }
}