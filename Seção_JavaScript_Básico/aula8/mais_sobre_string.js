// let umaString = "Um \"texto\".";  > aspas d. dentro de aspas d.
// let umaString = "Um \\texto.";  > barra invertida no texto.

/*               012345678
let umaString = "Um texto.";  > Todo caractere da String possui um índice(número de identificação), como acima dela. */

let umaString = "Um texto.";

// console.log(umaString[4]);

// console.log(umaString.indexOf('texto'));
// console.log(umaString.indexOf('texto', 2));
// console.log(umaString.lastIndexOf('t', 5));
// console.log(umaString.lastIndexOf('t', 5));
// console.log(umaString.replace('Um', 'Outra'));  > Substitui a palavra um por outra.
// console.log(umaString.length);  > Retorna o número 9, que é o tamanho da string.

umaString = 'O rato roeu a roupa do rei de roma.'

// console.log(umaString.slice(2, 6));  > retorna a palavra rato.
// console.log(umaString.slice(-5, -1));  > retorna a palavra roma, pois subtrai do tamanho total e conta a partir daí.

console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
