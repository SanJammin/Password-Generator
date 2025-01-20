const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let leftPassword = document.getElementById("left-password");
let rightPassword = document.getElementById("right-password");

function generatePassword() {
    let passwordLength = document.getElementById("password-length").value;
    let loopNumber = parseInt(passwordLength, 10);

    if (isNaN(loopNumber) || loopNumber <= 0) {
        leftPassword.textContent = "Invalid Input."
        rightPassword.textContent = "Enter a positive number."
        return;
    }

    leftPassword.textContent = "";
    rightPassword.textContent = "";

    for (let i = 0; i < loopNumber; i++) {
        let passwordCharacter = Math.floor(Math.random() * characters.length);
        leftPassword.textContent += characters[passwordCharacter];
    }

    for (let i = 0; i < loopNumber; i++) {
        let passwordCharacter = Math.floor(Math.random() * characters.length);
        rightPassword.textContent += characters[passwordCharacter];
    }
}

const copyTextLeft = () => {
    let copyLeft = document.getElementById("left-password").innerHTML;
    navigator.clipboard.writeText(copyLeft)
        .then(() => {
            alert("Password Copied")
    })
        .catch(err => {
            alert("Failed To Copy", err);
        });
};

const copyTextRight = () => {
    let copyRight = document.getElementById("right-password").innerHTML;
    navigator.clipboard.writeText(copyRight)
        .then(() => {
            alert("Password Copied")
    })
        .catch(err => {
            alert("Failed To Copy", err);
        });
};