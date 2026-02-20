/*
Gustavo Henrique tem 21 anos, pesa 73 kg, tem 1.8 m de altura e seu IMC é de xxxx.
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 37;
const peso = 84;
const alturaM = 1.80;
let anoNascimento;
let indiceMassaCorporal;
anoNascimento = 2026 - idade;
indiceMassaCorporal = peso / (alturaM * alturaM);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaM} m de altura e seu IMC é de ${indiceMassaCorporal}.`)
console.log(`Nasceu em ${anoNascimento}.`)