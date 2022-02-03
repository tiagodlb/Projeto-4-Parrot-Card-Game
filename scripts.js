//prompt com o numero de cartas que o jogador escolher (min 4 max 12) e só pode numeros pares
const listaCartas = [];

function cards(){
    const numeroCartas = parseInt(prompt("Quantos pares de cartas você quer? (Mínimo de 4 e máximo de 12)"));
    //confirma se o numero inserido pelo usuario é par ou não
    if(numeroCartas % 2 !== 0 || numeroCartas <= 2){
        alert("Por favor, insira um par válido!")
        numeroCartas = null
        cards()
    }
    
    
    for(let i = 0; i < numeroCartas; i++){
        let carta = `
        <div class="carta">
            <figure><img src="imagens/front.png"></figure>
        </div>
        `
        listaCartas.push(carta)
    }

    const containerCarta = document.querySelector(".container-carta");

    for(let i = 0; i < listaCartas.length; i++){
        containerCarta.innerHTML += `${listaCartas[i]}`
    }

}

cards()
//função para embaralhar as cartas
//implementar uma função que escreva cartas dinamicamente no html
//função que ao clickar na carta ela girar (transition-transform)
//fazer a logica de combinar as cartas
//alerta dizendo em quantas jogadas a pessoa ganhou
//implementar o contador
