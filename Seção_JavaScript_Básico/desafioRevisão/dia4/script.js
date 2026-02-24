// Number e Math

const numero = 8.45;

console.log(`Número: ${numero}`);
console.log(`Raiz: ${Math.sqrt(numero)}`);
console.log(`Floor: ${Math.floor(numero)}`);
console.log(`Ceil: ${Math.ceil(numero)}`);
console.log(`Round: ${Math.round(numero)}`);
console.log(`2 casas: ${Number(numero.toFixed(2))}`);


// Array

const numeros = [-1,16, 5, 8, 10, 4];

console.log(`Primeiro: ${numeros[0]}`);
console.log(`Último: ${numeros.at(-1)}`);
console.log(`Tamanho: ${numeros.length}`);
console.log(`Maior: ${Math.max(...numeros)}`);
console.log(`Menor: ${Math.min(...numeros)}`);