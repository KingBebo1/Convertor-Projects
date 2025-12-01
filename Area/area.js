const numInput = document.getElementById("numInput");
const From = document.getElementById("From");
const To = document.getElementById("To");
const Submit = document.getElementById("Submit");
const Display = document.getElementById("Display");

Submit.onclick = () => {
    const val = Number(numInput.value);
    let changedArea = 0;

    switch(From.value){
        case "Square Inch":
            switch(To.value){
                case "Square Inch": changedArea = val; break;
                case "Square Foot": changedArea = val / 144; break
                case "Square Yard": changedArea = val / 1296; break;
                case "Square Mile": changedArea = val / 4.014e+9; break;
                case "Square Meter": changedArea = val / 1550; break;
                case "Square Kilometer": changedArea = val / 1.55e+9; break;
            }
            break;
        case "Square Foot":
            switch(To.value){
                case "Square Inch": changedArea = val * 144; break;
                case "Square Foot": changedArea = val; break;
                case "Square Yard": changedArea = val / 9; break;
                case "Square Mile": changedArea = val / 2.788e+7; break;
                case "Square Meter": changedArea = val / 10.764; break;
                case "Square Kilometer": changedArea = val / 1.076e+7; break;
            }
            break;
        case "Square Yard":
            switch(To.value){
                case "Square Inch": changedArea = val * 1296; break;
                case "Square Foot": changedArea = val * 9; break;
                case "Square Yard": changedArea = val; break;
                case "Square Mile": changedArea = val / 3.098e+6; break;
                case "Square Meter": changedArea = val / 1.196; break;
                case "Square Kilometer": changedArea = val / 1.196e+6; break;     
            }
            break;
        case "Square Mile":
            switch(To.value){
                case "Square Inch": changedArea = val * 4.014e+9; break;
                case "Square Foot": changedArea = val * 2.788e+7; break;
                case "Square Yard": changedArea = val * 3.098e+6; break;
                case "Square Mile": changedArea = val; break;
                case "Square Meter": changedArea = val * 2.59e+6; break;
                case "Square Kilometer": changedArea = val * 2.59; break;  
            }
            break;
        case "Square Meter":
            switch(To.value){
                case "Square Inch": changedArea = val * 1550; break;
                case "Square Foot": changedArea = val * 10.764; break;
                case "Square Yard": changedArea = val * 1.196; break;
                case "Square Mile": changedArea = val / 2.59e+6; break;
                case "Square Meter": changedArea = val; break;
                case "Square Kilometer": changedArea = val / 1e+6; break;
            }
            break;
        case "Square Kilometer":
            switch(To.value){
                case "Square Inch": changedArea = val * 1.55e+9; break;
                case "Square Foot": changedArea = val * 1.076e+7; break;
                case "Square Yard": changedArea = val * 1.196e+6; break;
                case "Square Mile": changedArea = val / 2.59; break;
                case "Square Meter": changedArea = val * 1e+6; break;
                case "Square Kilometer": changedArea = val; break;
            }
            break;
    }

    Display.textContent = changedArea.toFixed(2);
}