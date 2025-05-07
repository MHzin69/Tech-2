const prompt = require("prompt-sync")();

let numeros = [5,9,7,6,70,13,15,93,1,12];
let valor = prompt("Qual valor será buscado: ");
let posição = null;

for(let i=0; i<10;i++){
    if(numeros[i]==valor){
        posição = i;
    }
}

if(posição==null){
    console.log("Não foi encontrado o valor");
}else{
    console.log("O valor foi encontrado na posição " + posição);
}   