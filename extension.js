console.log("Entrei na extensão!")
//Ler a página da Twitch
const interval = setInterval(() => {

    const button = document.querySelector(".tw-button tw-button--success tw-interactive");
    if (button) {
        //Identificar o ícone de pontos
        button.addEventListener("click", () => {
            console.log("ponto coletado!");
            clearInterval(interval)
        })
    }
}, 3000)