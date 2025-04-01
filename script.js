idade = prompt("Digite a Sua IDADE:");
if (idade < 18) {
  alert("Voce não pode jogar!! Volte quando completar 18 anos...");
}

// alert("O jogo VAI COMECAR")

if (idade >= 18) {
  escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura?");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;
  console.log("escolhaComputador");
  // Jogador Pedra, Computador Pedra --> empate!!
  // Jogador Tesoura, Computador Tesoura --> empate!!
  // Jogador Papel, Computador Papel --> empate!!

  if (escolhaJogador == escolhaComputador) {
    alert("EMPATE!!");
  }

  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      // Jogador Pedra, Computador Papel --> Computador vence!!
      alert("Computador VENCEU, escolheu PAPEL!");
    }
    if (escolhaComputador == 3) {
      // Jogador Pedra, Computador Tesoura --> Jogador vence!!
      alert("Jogador VENCEU, computador escolheu TESOURA!");
    }
  }

  // Jogador Tesoura, Computador Pedra --> Computador vence!!
  // Jogador Tesoura, Computador Papel --> Jogador vence!!
  if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      // Jogador Papel, Computador Pedra --> Jogador vence!!
      alert("Jogador VENCEU, computador escolheu PEDRA!");
    }
    if (escolhaComputador == 3) {
      // Jogador Papel, Computador Tesoura --> Computador vence!!
      alert("Computador VENCEU, escolheu TESOURA!");
    }
  }
  
  if(escolhaJogador == 3) {
    if(escolhaComputador == 1) {
      // Jogador Tesoura, Computador Pedra --> Computador vence!!
      alert("Computador VENCEU, escolheu PEDRA!")
    }
    if(escolhaComputador == 2) {
      // Jogador Tesoura, Computador papel --> Jogador vence!!
      alert("Jogador VENCEU, computador escolheu PAPEL!")
    }
  }
  // Jogador Papel, Computador Pedra --> Jogador vence!!
  // Jogador Papel, Computador Tesoura --> Computador vence!!
}