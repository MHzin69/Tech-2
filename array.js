let num = [1,2,9,7,6,4,10];
let soma = 0;
let media = 0;

for (let i = 0; i < 7; i++) {
    soma = soma + num[i];
}
media = soma / 7;
console.log(media);