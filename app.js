const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen")


// for each button set an event listner
buttons.forEach((button) => {
    button.addEventListener('click', () => {
       
        const currentValue = screen.textContent;
        console.log(currentValue)
        const buttonValue = button.dataset.value;
        

        
        // check which button is pressed

        if (buttonValue === "c" ){
            // clear button pressed
            clearScreen();
        }else if(buttonValue === "=" ){
            // equal button pressed
            alert("equal")
        }else if(buttonValue === "+" ){
            // plus button pressed
            alert("plus")
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
            console.log(button.dataset.value)
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
const add = () => {
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
    screen.innerText = "0";
}
