function add(x,y) {
    return x+y;
}

function subtract(x,y) {
    return x-y;
}

function multiply(x,y) {
    return x*y;
}

function divide(x,y) {
    if (y === 0) {
        return "no";
    }
    return x/y;
}

const ac = document.getElementById("clear");
ac.addEventListener('click', ()=> clear());

function clear() {
    array.splice(0);
    func='';
    displayValue='';
    display.textContent='';
    totalValue=0;
    holdValue ='';
    holdFunc = '';
}



function operate(func, x,y) {
    if (y==='=' || y==='+'|| y==='-'|| y==='*'|| y==='/' || y==='') {
        return operate(func,x,x);
    }
    x=parseInt(x);
    y=parseInt(y);
    if (func === '+') {
        return add(x,y);
    }
    else if(func==='-'){
        return subtract(x,y);
    }
    else if(func==='*') {
        return multiply(x,y);
    }
    else if(func ==='/'){
        return divide(x,y);
    }
}


const buttons = document.querySelectorAll('.num');
const display = document.getElementById('display');

buttons.forEach((button)=> {
    button.addEventListener('click', () => {
        //displayValue = parseInt(button.textContent);
        displayValue += button.textContent;
        display.textContent=displayValue;
    });
});

//when person clicks on function, reset internal display value
//if they click a number then change internal and external value on display
//if they click equals or another function then call the operate function on those 
// 1. idea put values into an array, if it reaches size of 3, call operate function,
// pop last 2 values then change first value

const functions = document.querySelectorAll('.func');
// issues with = 
let array = [];
let func;
let displayValue=""; // running calculator value
let totalValue = 0;
let holdValue ="";
let holdFunc = "";
functions.forEach((operator)=> {
    operator.addEventListener('click', () => {

        // store first number
        // store operator
        func = operator.textContent;
        if (totalValue !== 0) {
            holdValue = totalValue;
            totalValue = 0;
        }
        if (operator.textContent === '=' ) {
            // make the display show the final produce if user presses =
            // 
            console.log(holdValue);
            console.log(func);
            display.textContent = operate(holdFunc, holdValue, display.textContent);
            displayValue = display.textContent;
            
            holdValue=parseInt(displayValue);
            totalValue = holdValue;
            holdValue= '';
            holdFunc = '';
            func='';
            
            
            
            return;
        }
        
        if (func !== '' && operator.textContent !== '=' && holdValue !=='' && displayValue!= '' && holdFunc!=='')  {
            console.log(holdValue +' 2');
            console.log(func + ' 2');
            display.textContent = operate(holdFunc, holdValue, display.textContent);
            displayValue = display.textContent;
            holdValue=parseInt(displayValue);
            holdFunc= func;
            totalValue = holdValue;   
            displayValue='';
            func = '';
            return;
        }
        if (func!=='=') holdFunc=func;
        
        holdValue= parseInt(displayValue);
        displayValue='';
        func = '';
        

        //operate when user presses the '=' key


        
        /*// Holding first value
        let internalValue =parseInt(displayValue);
        
        // Holding function 
        func = operator.textContent;

        array.push(internalValue);
        array.push(func);
        if (func ==='=' && array.length <3) {
            
            return;
        }
        else if(func==='=' && array.length >2) {
            totalValue=operate(array[1],array[0],array[2]);
            console.log(totalValue);
            array[0]=totalValue;
            displayValue=totalValue;
            display.textContent=totalValue;
            array.splice(1,2);
        }
        if (array.length > 2) {
            totalValue = operate(array[1], array[0], array[2]);
            // saving the result in the first array index
            array[0] = totalValue;
            // displayValue=totalValue;
            // display.textContent=totalValue;
            console.log(array);
            console.log(totalValue);
            array.splice(1,2);
           
        }
        displayValue='';
        // array[0] = totalValue;
        // display.textContent=totalValue;
        // array.splice(1,2);
        // displayValue=totalValue;
        
        // // Reseting internal display valu
        // display.textContent=totalValue;
        
        // */
    });
});
