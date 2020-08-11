console.log("Entrei na extensão!")
const applicationInterval = setInterval(checkButton, 10000);

function checkButton(){
    console.log("CHECANDO BOTÃO...")
    const button = document.querySelector("span.tw-button__text");
    if (button) {
        button.click();
        console.log("Ponto coletado!!!!");
    }        
    console.log(button)
}