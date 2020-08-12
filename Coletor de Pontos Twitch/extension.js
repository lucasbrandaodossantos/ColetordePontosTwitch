console.log("Entrei na extensão!")
//Ler a página da Twitch
const interval = setInterval(()=>{

    const button = document.querySelector(".tw-button tw-button--success tw-interactive");
    if (button){
        button.addEventListener("click", () => {
            console.log("ponto coletado!");
            clearInterval(interval)
        })
    }       
}, 3000)

//Identificar o ícone de pontos

//Relógio para acionar de 3 em 3 minutos
