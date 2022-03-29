function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b === 0) {
        return "no";
    }
    return a/b;
}

function operate(func, a, b) {
    if (func === '+') {
        return add(a,b);
    }
    else if(func==='-'){
        return subtract(a,b);
    }
    else if(func==='*') {
        return multiply(a,b);
    }
    else {
        return divide(a,b);
    }
}

let displayValue = 0;

const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

buttons.forEach((button)=> {
    button.addEventListener('click', () => {
        displayValue = button.textContent;
        display.textContent=button.textContent;
    });
});