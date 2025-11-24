const pounds = document.getElementById("pounds");
const kilograms = document.getElementById("kilograms");
const weightInput = document.getElementById("weightInput");
const submit = document.getElementById("submit");
const display = document.getElementById("display");
let changedWeight = 0;

pounds.onclick = function(){

    pounds.style.boxShadow = "5px 5px 10px 2px"
    submit.addEventListener("click", event => {
        changedWeight = weightInput.value / 2.20462;
        display.textContent = changedWeight;
        pounds.style.boxShadow = "0px 0px 0px 0px"
    })
}

kilograms.onclick = function(){
    kilograms.style.boxShadow = " 5px 5px 10px 2px"
    submit.addEventListener("click", event =>{
        changedWeight = weightInput.value * 2.205;
        display.textContent = changedWeight;
        kilograms.style.boxShadow = "0px 0px 0px 0px"
    })
}