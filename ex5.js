const prompt = require("prompt-sync")();

let nomes = [];
let continuar,i=0;

do{
    nomes[i] = prompt("Insira o nome do aluno: ");
    i++; 
    continuar = prompt("Deseja continuar? (s/n):");

}while(continuar == "s" || continuar == "S");

console.log("Foram informados " + i + " nomes");
console.log("Foram informados os seguintes nomes: "+ nomes);
