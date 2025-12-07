const numInput = document.getElementById("numInput");
const From = document.getElementById("From");
const To = document.getElementById("To");
const Submit = document.getElementById("Submit");
const Display = document.getElementById("Display");

Submit.onclick = () => {
    const val = Number(numInput.value);
    let changedDigi = 0;

    switch(From.value){
        case "Bit":
            switch(To.value){
                case "Bit": changedDigi = val; break;
                case "Byte": changedDigi = val / 8; break;
                case "Kilobyte": changedDigi = val / 8192; break;
                case "Megabyte": changedDigi = val / (8 * 1024 * 1024); break;
                case "Gigabyte": changedDigi = val / (8 * 1024 ** 3); break;
                case "Terabyte": changedDigi = val / (8 * 1024 ** 4); break;
            }
            break;
        case "Byte":
            switch(To.value){
                case "Bit": changedDigi = val * 8; break;
                case "Byte": changedDigi = val; break;
                case "Kilobyte": changedDigi = val / 1024; break;
                case "Megabyte": changedDigi = val / (1024 * 1024); break;
                case "Gigabyte": changedDigi = val / (1024 ** 3); break;
                case "Terabyte": changedDigi = val / (1024 ** 4); break;
            }
            break;
        case "Kilobyte":
            switch(To.value){
                case "Bit": changedDigi = val * 8192; break;
                case "Byte": changedDigi = val * 1024; break;
                case "Kilobyte": changedDigi = val; break;
                case "Megabyte": changedDigi = val / 1024; break;
                case "Gigabyte": changedDigi = val / (1024 * 1024); break;
                case "Terabyte": changedDigi = val / (1024 ** 3); break; 
            }
            break;
        case "Megabyte":
            switch(To.value){
                case "Bit": changedDigi = val * (8 * 1024 * 1024); break;
                case "Byte": changedDigi = val * (1024 * 1024); break;
                case "Kilobyte": changedDigi = val * 1024; break;
                case "Megabyte": changedDigi = val; break;
                case "Gigabyte": changedDigi = val / 1024; break;
                case "Terabyte": changedDigi = val / (1024 * 1024); break;
            }
            break;
        case "Gigabyte":
            switch(To.value){
                case "Bit": changedDigi = val * (8 * 1024 ** 3); break;
                case "Byte": changedDigi = val * (1024 ** 3); break;
                case "Kilobyte": changedDigi = val * (1024 * 1024); break;
                case "Megabyte": changedDigi = val * 1024; break;
                case "Gigabyte": changedDigi = val; break;
                case "Terabyte": changedDigi = val / 1024; break;
            }
            break;
        case "Terabyte":
            switch(To.value){
                case "Bit": changedDigi = val * (8 * 1024 ** 4); break;
                case "Byte": changedDigi = val * (1024 ** 4); break;
                case "Kilobyte": changedDigi = val * (1024 ** 3); break;
                case "Megabyte": changedDigi = val * (1024 * 1024); break;
                case "Gigabyte": changedDigi = val * 1024; break;
                case "Terabyte": changedDigi = val; break; 
            }    
            break;
    }
    changedDigi = changedDigi.toFixed(6);
    Display.textContent = changedDigi;
}