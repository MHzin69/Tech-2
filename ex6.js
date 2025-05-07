const prompt = require("prompt-sync")();

let nomes = [];
let continuar, i=0;
let notas = [];

do{
    nomes[i] = prompt("Insira o nome do aluno: ");
    i++; 
    continuar = prompt("Deseja continuar? (s/n):");

}while(continuar == "s" || continuar == "S");

for(let i=0; i < nomes.length; i++){
    notas[i] = prompt("Insira a nota do aluno: "+nomes[i]+ ":");
}

for(let i = 0; i < nomes.length; i++){
    console.log("Aluno(a) "+nomes[i]+ " ficou com a nota: " + notas[i]);
}