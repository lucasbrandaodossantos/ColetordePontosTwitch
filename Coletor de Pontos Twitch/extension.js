console.log("Entrei na extensão!")
//Ler a página da Twitch
const applicationInterval = setInterval(checkButton, 10000);

function checkButton(){
    console.log("CHECANDO BOTÃO...")
    const button = document.querySelector("span.tw-button__text");
    if (button) {
        button.click();
        console.log("Ponto coletado");
    }        
    console.log(button)
}

//Identificar o ícone de pontos

//Relógio para acionar de 3 em 3 minutos
