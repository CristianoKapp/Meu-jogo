function jogar() {
    let idade = localStorage.getItem("idade");

    // Se não houver idade salva, perguntar ao jogador
    if (!idade) {
        idade = prompt("Digite a sua idade:");
        
        if (idade < 18) {
            alert("Você não pode jogar!! Volte quando completar 18 anos...");
            return;
        }

        // Salvar idade no navegador
        localStorage.setItem("idade", idade);
    }

    // Iniciar o jogo
    let escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura?");
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    console.log("Escolha do Computador:", escolhaComputador);

    if (escolhaJogador == escolhaComputador) {
        alert("EMPATE!!");
    } else if (escolhaJogador == 1 && escolhaComputador == 2) {
        alert("Computador VENCEU, escolheu PAPEL!");
    } else if (escolhaJogador == 1 && escolhaComputador == 3) {
        alert("Jogador VENCEU, computador escolheu TESOURA!");
    } else if (escolhaJogador == 2 && escolhaComputador == 1) {
        alert("Jogador VENCEU, computador escolheu PEDRA!");
    } else if (escolhaJogador == 2 && escolhaComputador == 3) {
        alert("Computador VENCEU, escolheu TESOURA!");
    } else if (escolhaJogador == 3 && escolhaComputador == 1) {
        alert("Computador VENCEU, escolheu PEDRA!");
    } else if (escolhaJogador == 3 && escolhaComputador == 2) {
        alert("Jogador VENCEU, computador escolheu PAPEL!");
    } else {
        alert("Opção inválida! Escolha 1, 2 ou 3.");
    }
}
