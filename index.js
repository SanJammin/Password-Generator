// Create ability to set password length
// Add "copy-on-click"
// Toggle symbols and numbers, on/off
// Create a light mode/dark mode function


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let leftPassword = document.getElementById("left-password");
let rightPassword = document.getElementById("right-password");

function generatePassword() {
    leftPassword.textContent = "";
    rightPassword.textContent = "";
    
    for (let i = 0; i < 16; i++) {
        let passwordCharacter = Math.floor(Math.random() * characters.length);
        leftPassword.textContent += characters[passwordCharacter];
    }

    for (let i = 0; i < 16; i++) {
        let passwordCharacter = Math.floor(Math.random() * characters.length);
        rightPassword.textContent += characters[passwordCharacter];
    }
}