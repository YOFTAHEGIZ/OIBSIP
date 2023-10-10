let operator = '';
let previousValue = '';
let currentValue = '';


document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");
    let previousScreen = document.querySelector(".upperText");
    let currentScreen = document.querySelector(".lowerText");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))
    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperater(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))
    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = '';
        currentScreen.textContent = '';
    })
    equal.addEventListener("click", function(){
        if(currentValue != '' && previousValue !=''){
            calculate()
            previousScreen.textContent = '';
            currentScreen.textContent = previousValue;
        }
       
    })
    decimal.addEventListener("click", function(){
        addDecimal();
    })
})

function handleNumber(num){
    if(currentValue.length <=5){
        currentValue += num;
    }
}
function handleOperater(op){
    if(currentValue === ''){
        return
    }
    if(previousValue !== ''){
        calculate()
    }
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}
function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    
    if(operator == '+'){
        previousValue += currentValue;
    }else if(operator == '-'){
        previousValue -= currentValue;
    }else if(operator == 'X'){
        previousValue *= currentValue;
    }else{
        previousValue /= currentValue;
    }

    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}
function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}