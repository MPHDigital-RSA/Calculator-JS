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
            logData(sum(numbers))
        }else if(buttonValue === "+" ){
            // when you press the add button clear the save the value to an array and clear the screen

            const screenValue = screen.textContent;
            numbers.push(screenValue)
            clearScreen();
            console.log(numbers)

        }else if(buttonValue === "×" ){
            // multiply button pressed
            alert("multiply")
        }else if(buttonValue === "÷" ){
            // devide button pressed
            alert("divide")
        }else if(buttonValue === "-" ){
            // minus button pressed
            alert("minus")
        }else{
            logData(button.dataset.value)      
        }
    })
})

// FUNCTIONS HERE!!

// function to log data to the calculator screen
const logData = (val) =>{
    const currentValue = screen.innerHTML;
    screen.innerHTML = currentValue + val;
}

// add function
const sum = (arr) => {

    // check if the arr is an array if not return false.
    if(toString.call(arr) !== "[object Array]") return false;

    let total = 0;

    // iterate through the input array
    for( let i = 0; i < arr.length; i++){

        // if element is not a number skip to the next
        if(isNaN(arr[1])){
            continue;
        }

        // add the numeric value of the element to the total

        total += Number(arr[i]);
    }

    // return the total sum
    return total;

}

// subtract function
const subtract = () => {
}

// multiply function
const multiply = () => {
}

// divide function
const divide = () => {
}

// equals function
const equals = () => {
}

const clearScreen = () => {
    screen.innerText = "";
}
