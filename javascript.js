function add(a,b){
    let num1 = parseFloat(a)
    let num2 = parseFloat(b)
    return (num1+num2).toFixed(2);
}

function subtract(a,b){
    let num1 = parseFloat(a)
    let num2 = parseFloat(b)
    return (num1-num2).toFixed(2);
}

function multiply(a,b){
    let num1 = parseFloat(a)
    let num2 = parseFloat(b)
    return (num1*num2).toFixed(2);
}

function divide(a,b){
    let num1 = parseFloat(a)
    let num2 = parseFloat(b)
    return (num1/num2).toFixed(2);
}

function operate(num1, num2, operator){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
        default:
            break;

    }
}

let currentNum = '';
let previousNum = '';
let operator = '';

const display = document.querySelector("#display")
const numButtons = document.querySelectorAll(".numButton")
const operatorButtons = document.querySelectorAll(".operatorButton")
const equalButton = document.querySelector(".equalButton")
const clearButton = document.querySelector(".clearButton")

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.value
        currentNum = display.textContent
    })})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent = ''
        if (previousNum != '' && operator != ''){
            currentNum = operate(previousNum, currentNum, operator);
        }
        previousNum = currentNum
        currentNum = ''
        operator = button.value
        console.log(previousNum)
        }
    )
})

equalButton.addEventListener('click', () => {
    if (operator != '' && previousNum != ''){
            currentNum = operate(previousNum, currentNum, operator);
            display.textContent = currentNum
        } else {
            display.textContent = ''
        }
    previousNum = ''
    operator = ''  
})

clearButton.addEventListener('click', () => {
    currentNum = ''
    previousNum = ''
    operator = ''
    display.textContent = ''
})