// Iniciar ou recuperar o placar do localStorage
let placarJogador = localStorage.getItem("placarJogador") ? parseInt(localStorage.getItem("placarJogador")) : 0;
let placarComputador = localStorage.getItem("placarComputador") ? parseInt(localStorage.getItem("placarComputador")) : 0;

function jogar() {
    let idade = localStorage.getItem("idade");

    if (!idade) {
        idade = prompt("Digite a sua idade:");
        
        if (idade < 18) {
            alert("Você não pode jogar!! Volte quando completar 18 anos...");
            return;
        }

        localStorage.setItem("idade", idade);
    }

    let escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura?");
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    console.log("Escolha do Computador:", escolhaComputador);

    if (escolhaJogador == escolhaComputador) {
        alert("EMPATE!!");
    } else if (escolhaJogador == 1 && escolhaComputador == 2) {
        alert("Computador VENCEU, escolheu PAPEL!");
        placarComputador++;
    } else if (escolhaJogador == 1 && escolhaComputador == 3) {
        alert("Jogador VENCEU, computador escolheu TESOURA!");
        placarJogador++;
    } else if (escolhaJogador == 2 && escolhaComputador == 1) {
        alert("Jogador VENCEU, computador escolheu PEDRA!");
        placarJogador++;
    } else if (escolhaJogador == 2 && escolhaComputador == 3) {
        alert("Computador VENCEU, escolheu TESOURA!");
        placarComputador++;
    } else if (escolhaJogador == 3 && escolhaComputador == 1) {
        alert("Computador VENCEU, escolheu PEDRA!");
        placarComputador++;
    } else if (escolhaJogador == 3 && escolhaComputador == 2) {
        alert("Jogador VENCEU, computador escolheu PAPEL!");
        placarJogador++;
    } else {
        alert("Opção inválida! Escolha 1, 2 ou 3.");
        return;
    }

    // Salvar o placar atualizado
    localStorage.setItem("placarJogador", placarJogador);
    localStorage.setItem("placarComputador", placarComputador);

    // Atualizar a exibição do placar
    atualizarPlacar();
}

function atualizarPlacar() {
    document.getElementById("placar").innerText = `Placar - Você: ${placarJogador} | Computador: ${placarComputador}`;
}

// Atualizar o placar ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarPlacar);
