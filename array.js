const prompt = require("prompt-sync")();

let num = [];
let soma = 0;
let media = 0;

let qtd = Number(prompt("Quantos números você quer somar? "));

for (let i = 0; i < qtd; i++) {
    num[i] = Number(prompt("Informe o valor da posição " + i + ": "));
    soma += num[i];
}

for (let i = 0; i < qtd; i++) {
    console.log("Posição " + i + " - Valor " + num[i]);
}

media = soma / qtd;
console.log("Média: " + media);
