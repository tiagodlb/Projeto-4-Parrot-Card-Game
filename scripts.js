//prompt com o numero de cartas que o jogador escolher (min 4 max 12) e só pode numeros pares
const listaCartas = [];
const imagens = ["bobrossparrot", "fiestaparrot", "tripletsparrot",
    "explodyparrot", "metalparrot", "revertitparrot", "unicornparrot"]

const numeroCartas = parseInt(prompt("Quantos pares de cartas você quer? (Mínimo de 4 e máximo de 14)"));
//confirma se o numero inserido pelo usuario é par ou não
if (numeroCartas % 2 !== 0 || numeroCartas <= 2 || numeroCartas > 14) {
    alert("Por favor, insira um par válido!")
    numeroCartas = null
}

function cards() {

    for (let i = 0; i < numeroCartas; i++) {
        let carta = `
        <div class="carta" data-carta="${imagens[i]}" data-identifier="card">
            <figure class="gif">
            <img class="back-face face" src="imagens/${imagens[i]}.gif data-identifier="back-face">
            </figure>
            <figure>
            <img class="front-face face" src="imagens/front.png"data-identifier="front-face">
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

//função que ao clickar na carta ela girar
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

    jogadas++;
}
//checa a combinação
function checarCarta() {
    let checar = carta1.dataset.carta === carta2.dataset.carta
    console.log(checar)

    !checar ? fixarCartas() : resetarCartas(checar);
}

//fixa as cartas para as outras não serem clickadas
function fixarCartas() {
    trancar = true
    setTimeout(() => {
        carta1.classList.remove("flip");
        carta2.classList.remove('flip');

        resetarCartas();
    }, 1000);

}
//reseta a carta caso erre a combinação
function resetarCartas(checar = false) {
    if (checar) {
        carta1.removeEventListener('click', flipCard)
        carta2.removeEventListener('click', flipCard)
        carta1.classList.add(fimDeJogo++)
        carta2.classList.add(fimDeJogo++)
        setTimeout(Acabou, 500)
    }
    [carta1, carta2, trancar] = [null, null, false]
}

//alerta dizendo em quantas jogadas a pessoa ganhou
function Acabou() {
    if (fimDeJogo == numeroCartas) {
        alert("Você ganhou em " + jogadas + " jogadas!")
    }
    else {
        console.log("teste")
    }

}


//função para embaralhar as cartas
imagens.sort(comparador);
function comparador() {
    return Math.random() - 0.5;
}

cards()

// Esta função pode ficar separada do código acima, onde você preferir
let fimDeJogo = 0;
let jogadas = 0;
let trancar = false;
let carta1, carta2;
const carta = document.querySelectorAll(".carta");
const cartaFrente = document.querySelectorAll("img")
carta.forEach(carta => carta.addEventListener("click", flipCard))

