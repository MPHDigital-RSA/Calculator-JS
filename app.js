const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen")

let numbers = [];

// for each button set an event listner
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        const buttonValue = button.dataset.value;
    
        // check which button is pressed

        if (buttonValue === "c" ){
            // clear button pressed
            clearScreen();
            numbers = [];
        }else if(buttonValue === "=" ){
            // equal button pressed
            total(screen.innerHTML);
        }else{
            // if any button is pressed except the equal and clear all button
            logData(buttonValue)      
        }
    })
})

// FUNCTIONS HERE!!

// function to log data to the calculator screen
const logData = (val) =>{
    const currentValue = screen.innerHTML;
    screen.innerHTML = currentValue + val;
}

// total function that runs when the equal sign is pressed!
const total = (value) => {
    const sum = eval(value);
    clearScreen();
    logData(sum);
}

const clearScreen = () => {
    screen.innerText = "";
}
