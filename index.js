particlesJS.load("particles-container", "/particlesjs-config.json");

function TypingText(elemento) {
    const arrayText = elemento.innerHTML.split("");
    elemento.innerHTML = '';
    arrayText.forEach((letra, i) => {
        setTimeout(function() {

         elemento.innerHTML += letra;}, 140 * i);
        
    })
};

function FastTypingText(elemento) {
    const arrayText = elemento.innerHTML.split("");
    elemento.innerHTML = '';
    arrayText.forEach((letra, i) => {
        setTimeout(function() {

         elemento.innerHTML += letra;}, 30 * i);
        
    })
}

const nameText = document.getElementById("nameLine");
const devText = document.getElementsByClassName("spanText");

TypingText(nameText);
TypingText(devText);

