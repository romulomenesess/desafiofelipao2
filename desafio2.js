function calcularRanqueadasJogadas (vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
;

    if (saldoVitorias < 10) {
        console.log("O Herói tem de saldo de " + saldoVitorias + " vitórias e está no nível de Ferro")
    }
    else if (saldoVitorias >= 11 && saldoVitorias < 20) {
        console.log("O Herói tem de saldo de " + saldoVitorias + " vitórias e está no nível de Bronze")
    }
    else if (saldoVitorias >= 21 && saldoVitorias < 50) {
        console.log("O Herói tem de saldo de " + saldoVitorias + " vitórias e está no nível de Prata")
    }
    else if (saldoVitorias >= 51 && saldoVitorias < 80) {
        console.log("O Herói tem de saldo de " + saldoVitorias + " vitórias e está no nível de Ouro")
    }
    else if (saldoVitorias >= 81 && saldoVitorias < 90) {
        console.log("O Herói tem de saldo de " + saldoVitorias + " vitórias e está no nível de Diamante")
    }
    else if (saldoVitorias > 91 && saldoVitorias < 100) {
        console.log("O Herói tem de saldo de " + saldoVitorias + " vitórias e está no nível de Lendário")
    }
    else {
        console.log("O Herói tem de saldo de " + saldoVitorias + " vitórias e está no nível de Imortal")
    }
}

let contador = 0;
do {
    calcularRanqueadasJogadas (29,25);
    calcularRanqueadasJogadas (148, 67);
    calcularRanqueadasJogadas (79, 26);
    calcularRanqueadasJogadas (98, 51);
   }   while (contador > 1);