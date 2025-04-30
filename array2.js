const prompt = require("prompt-sync")();

let num = [1,-2,3,4,5,-6,7,8,-9,10];
let soma =0;
let neg = 0;
let pos = 0;

for(let i=0; i < 10; i++){
    soma = soma + num[i];

    if(num[i] < 0){
        neg = neg + 1;
    }else{
        pos = pos + num[i];
    }
}

console.log("Soma: " + soma);
console.log("Negativos: " + neg);
console.log("A soma dos números positivos: " + pos);