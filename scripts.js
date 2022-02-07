//prompt com o numero de cartas que o jogador escolher (min 4 max 12) e só pode numeros pares
const listaCartas = [];
const imagens = ["bobrossparrot", "fiestaparrot", "tripletsparrot",
    "explodyparrot", "metalparrot", "revertitparrot", "unicornparrot"]

let trancar = false;
let carta1, carta2;
const carta = document.querySelectorAll(".carta");

function cards() {
    const numeroCartas = parseInt(prompt("Quantos pares de cartas você quer? (Mínimo de 4 e máximo de 14)"));
    //confirma se o numero inserido pelo usuario é par ou não
    if (numeroCartas % 2 !== 0 || numeroCartas <= 2 || numeroCartas > 14) {
        alert("Por favor, insira um par válido!")
        numeroCartas = null
    }


    for (let i = 0; i < numeroCartas; i++) {
        let carta = `
        <div class="carta" data-carta="${imagens[i]}">
            <figure>
            <img class="back-face" src="imagens/${imagens[i]}.gif" disabled>
            <img class="front-face" src="imagens/front.png">
            </figure>
        </div>
        `
        listaCartas.push(carta)
    }

    const containerCarta = document.querySelector(".container-carta");

    for (let i = 0; i < (listaCartas.length) / 2; i++) {
        containerCarta.innerHTML += `${listaCartas[i]}` + `${listaCartas[i]}`
    }
}

function flipCard() {
    if (trancar) return false;
    console.log(this)
    this.classList.add("flip")
    if (!carta1) {
        carta1 = this;
        return false
    }
    carta2 = this
    checarCarta();
}

function checarCarta() {
    let checar = carta1.dataset.carta === carta2.dataset.carta
    console.log(checar)

    !checar ? fixarCartas() : resetarCartas(checar);
}
function fixarCartas() {
    trancar = true
    setTimeout(() => {
        carta1.classList.remove("flip");
        carta2.classList.remove('flip');

        resetarCartas();
    }, 1000);

}

function resetarCartas(checar = false) {
    if (checar) {
        carta1.removeEventListener('click', flipCard)
        carta2.removeEventListener('click', flipCard)
    }
    [carta1, carta2, trancar] = [null, null, false]
}

//
//função para embaralhar as cartas
//função que ao clickar na carta ela girar (transition-transform)
//fazer a logica de combinar as cartas
//alerta dizendo em quantas jogadas a pessoa ganhou
//implementar o contador
cards()
const cartaFrente = document.querySelectorAll("img")
carta.forEach(carta => carta.addEventListener("click", flipCard))
