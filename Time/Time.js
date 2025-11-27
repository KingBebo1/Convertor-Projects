const numInput = document.getElementById("numInput");
const From = document.getElementById("From");
const To = document.getElementById("To");
const Submit = document.getElementById("Submit");
const Display = document.getElementById("Display");

Submit.onclick = () => {
    const val = Number(numInput.value);
    let changedTime = 0;

    switch(From.value){
        case "Seconds":
            switch(To.value){
                case "Seconds": changedTime = val; break;
                case "Minutes": changedTime = val / 60; break;
                case "Hours": changedTime = val / 3600; break;
                case "Days": changedTime = val / 86400; break;
                case "Weeks": changedTime = val / 604800; break;
                case "Month": changedTime = val / 2.628e+6; break;
                case "Years": changedTime = val / 3.154e+7; break;
            }
        case "Minutes":
            switch(To.value){
                case "Seconds": changedTime = val * 60; break;
                case "Minutes": changedTime = val; break;
                case "Hours": changedTime = val / 60; break;
                case "Days": changedTime = val / 1440; break;
                case "Weeks": changedTime = val / 10080; break;
                case "Month": changedTime = val / 43800; break;
                case "Years": changedTime = val / 525600; break;
            }
        case "Hours":
            switch(To.value){
                case "Seconds": changedTime = val * 3600; break;
                case "Minutes": changedTime = val * 60; break;
                case "Hours": changedTime = val; break;
                case "Days": changedTime = val / 24; break;
                case "Weeks": changedTime = val / 168; break;
                case "Month": changedTime = val / 730; break;
                case "Years": changedTime = val / 8760; break;
            }
        case "Days":
            switch(To.value){
                case "Seconds": changedTime = val * 86400; break;
                case "Minutes": changedTime = val * 1440; break;
                case "Hours": changedTime = val * 24; break;
                case "Days": changedTime = val; break;
                case "Weeks": changedTime = val / 7; break;
                case "Month": changedTime = val / 30.417; break;
                case "Years": changedTime = val / 365; break;
            }
        case "Weeks":
            switch(To.value){
                case "Seconds": changedTime = val * 604800; break;
                case "Minutes": changedTime = val * 10080; break;
                case "Hours": changedTime = val * 168; break;
                case "Days": changedTime = val * 7; break;
                case "Weeks": changedTime = val; break;
                case "Month": changedTime = val / 4.345; break;
                case "Years": changedTime = val / 52.143; break;
            }
        case "Month":
            switch(To.value){
                case "Seconds": changedTime = val * 2.628e+6; break;
                case "Minutes": changedTime = val * 43800; break;
                case "Hours": changedTime = val * 730; break;
                case "Days": changedTime = val * 30.417; break;
                case "Weeks": changedTime = val * 4.345; break;
                case "Month": changedTime = val; break;
                case "Years": changedTime = val /12; break
            }
        case "Years":
            switch(To.value){
                case "Seconds": changedTime = val * 3.154e+7; break;
                case "Minutes": changedTime = val * 525600; break;
                case "Hours": changedTime = val * 8760; break;
                case "Days": changedTime = val * 365; break;
                case "Weeks": changedTime = val * 52.143; break;
                case "Month": changedTime = val * 12; break;
                case "Years": changedTime = val; break;
            }
    }

    Display.textContent = changedTime;
}