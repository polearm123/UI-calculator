function add(firstNumber,secondNumber){

    return parseInt(firstNumber) + parseInt(secondNumber);

}

function multiply(firstNumber,secondNumber){

    return parseInt(firstNumber)*parseInt(secondNumber);
}

function divide(firstNumber,secondNumber){
    return Math.floor(parseInt(firstNumber)/parseInt(secondNumber));
}

function subtract(firstNumber,secondNumber){

    return parseInt(firstNumber)-parseInt(secondNumber);

}

function operate(){

    var secondNumber = currentOperationStack.slice(0,currentOperationStack.length).join("") //take the final number from the operation stack
    var result = 0; //remporary result holder

    console.log(`figures in operate: firstNumber = ${firstNumber}, secondNumber = ${secondNumber} , Operator = ${firstOperator}`);


    var paragraph = document.querySelector(".calculator-output"); 

    switch(firstOperator){

        case '+': //adds the two numbers

            result = add(firstNumber,secondNumber);
            console.log(`oeprator is: ${firstOperator}`);
            console.log("not yet implemented");
            break;


        case '-':
            result = subtract(firstNumber,secondNumber);
            console.log("not yet implemented");
            break;



        case '*':
            result = multiply(firstNumber,secondNumber);
            console.log(`oeprator is: ${firstOperator}`);
            console.log("not yet implemented");
            break;



        case '/':
            result = divide(firstNumber,secondNumber);
            console.log(`operator is: ${firstOperator}`);
            console.log("not yet implemented");
            break;



    }


    displayStack = []; //empty the display stack getting ready to display only current result
    displayStack.push(result.toString());
    displayString = displayStack.join("");
    paragraph.textContent = displayString;


}

function clearDisplay(){

    var screenOutput = document.querySelectorAll(".calculator-output");
    screenOutput.forEach((paragraph)=> {paragraph.parentNode.removeChild(paragraph);})


}


function clearScreen(){//clears the contents of calculator output and resets the display string

    var calculatorOutputContainer = document.querySelector(".calculator-output");
    calculatorOutputContainer.innerHTML = "";
    displayString = "";
    displayStack = [];
    firstNumber = "";
    let firstOperator = "";
    let thirdOperator = "";
    

}

// function setOutputDisplay(value){

//     var paragraph = document.querySelector(".calculator-output"); 
//     displayString = displayStack.join("");
//     paragraph.textContent = displayString; //changes the content of the paragraph holding the display


// }

function displayButton(event){ //spits the output of numerical buttons

    const button = event.target;
    displayStack.push(button.value); //global variable holding the display of the calculator
    currentOperationStack.push(button.value);
    var paragraph = document.querySelector(".calculator-output"); 
    
    displayString = displayStack.join("");
    paragraph.textContent = displayString; //changes the content of the paragraph holding the display
   
}

function firstNumberAndOperator(){ //retrieves and sets first number and operator and resets the display stack

    console.log(displayString[displayString.length-1]);

    firstNumber = displayString.slice(0,displayString.length-1);
    firstOperator = displayString[displayString.length-1];

    currentOperationStack = [];

    console.log(displayStack);

    console.log(firstNumber);
    console.log(firstOperator);
  
}


let allButtons = document.querySelectorAll(".number");
let clearButton = document.querySelector(".clear");
let operatorButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equal");


let firstNumber = "";
let firstOperator = "";


var displayStack = [];
var currentOperationStack = [];
var displayString = "";

allButtons.forEach((calcButton) => calcButton.addEventListener("click", displayButton));
operatorButtons.forEach((calcButtons) => calcButtons.addEventListener("click", displayButton));
operatorButtons.forEach((calcButtons) => calcButtons.addEventListener("click", firstNumberAndOperator));
clearButton.addEventListener("click", clearScreen);

equalButton.addEventListener("click", operate);

// display("this is a test string");