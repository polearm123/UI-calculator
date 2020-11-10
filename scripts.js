function add(firstNumber,secondNumber){}

function multiply(firstNumber,secondNumber){}

function divide(firstNumber,secondNumber){}

function subtract(firstNumber,secondNumber){}

function operate(operator,firstNumber,secondNumber){}

function clearDisplay(){

    var screenOutput = document.querySelectorAll(".calculator-output");
    screenOutput.forEach((paragraph)=> {paragraph.parentNode.removeChild(paragraph);})


}

function display(displayString){

    clearDisplay();
    var calculatorOutputContainer = document.querySelector(".calculator-output");
    var paragraph = document.createElement("p");
    paragraph.textContent = `${displayString}`;
    calculatorOutputContainer.appendChild(paragraph);
    
   
}

function displayButton(event){ //if button is clear, clear the screen else output the value of the button

    const button = event.target;
    
   
    var calculatorOutputContainer = document.querySelector(".calculator-output");
    
    if(button.value == "clear"){
       calculatorOutputContainer.innerHTML = "";
       return;
    }


    var paragraph = document.createElement("p");
    paragraph.textContent = `${button.value}`;
    calculatorOutputContainer.appendChild(paragraph);


}


let allButtons = document.querySelectorAll("button");

allButtons.forEach((calcButton) => calcButton.addEventListener("click", displayButton));

// display("this is a test string");