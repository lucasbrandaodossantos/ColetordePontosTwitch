console.log("Entrei na extensão!")
//Ler a página da Twitch
const interval = setInterval(() => {
    console.log("Entrei na função")

    const button = document.querySelector(".tw-button__text");
    //Identificar o ícone de pontos
    if (button) {
        button.click();
        console.log("PONTO COLETADO!!");
        clearInterval(interval)
    } else {
        console.log("Botão não encontrado!");        
    }

}, 3000)