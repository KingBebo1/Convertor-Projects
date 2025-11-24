const Celsius = document.getElementById("Celsius");
const Farenheit = document.getElementById("Farenheit");
const Kelvin = document.getElementById("Kelvin");
const tempInput = document.getElementById("tempInput");
const Submit = document.getElementById("Submit");
const convertToTemp = document.getElementById("convertToTemp");
const toCelsius = document.getElementById("toCelsius");
const toFarenheit = document.getElementById("toFarenheit");
const toKelvin = document.getElementById("toKelvin")
const display = document.getElementById("Display");
let changedTemp = 0;

Celsius.onclick = function(){
    Celsius.style.boxShadow = "5px 5px 10px 2px"
    Submit.addEventListener("click", event => {
        switch(convertToTemp.value){
            case "toCelsius":
                changedTemp = tempInput.value;
                display.textContent = changedTemp;
                break;
            case "toFarenheit":
                changedTemp = (9/5 * tempInput.value) + 32;
                display.textContent = changedTemp;
                break;
            case "toKelvin":
                 changedTemp = tempInput.value + 273.15;
                 display.textContent = changedTemp;
                 break;
        }
        Celsius.style.boxShadow = "0px 0px 0px 0px"
    })
}

Farenheit.onclick = function(){
    Farenheit.style.boxShadow = "5px 5px 10px 2px"
    Submit.addEventListener("click", event => {
        switch(convertToTemp.value){
            case "toCelsius":
                changedTemp = (5/9 * (tempInput.value - 32));
                display.textContent = changedTemp;
                break;
            case "toFarenheit":
                changedTemp = tempInput.value;
                display.textContent = changedTemp;
                break;
            case "toKelvin":
                changedTemp = 5/9 * (tempInput.value - 32) + 273.15;
                display.textContent = changedTemp;
                break; 
        }
        Farenheit.style.boxShadow = "0px 0px 0px 0px"
    })
}


Kelvin.onclick = function(){
    Kelvin.style.boxShadow = "5px 5px 10px 2px"
    Submit.addEventListener("click", event => {
        switch(convertToTemp.value){
            case "toCelsius":
                changedTemp = tempInput.value - 273.15;
                display.textContent = changedTemp;
                break;
            case "toFarenheit":
                changedTemp = (9/5 * (tempInput.value - 273.15)) + 32;
                display.textContent = changedTemp;
                break;
            case "toKelvin":
                changedTemp = tempInput.value;
                display.textContent = changedTemp;
                break;
        }
        Kelvin.style.boxShadow = "0px 0px 0px 0px"
    })
}