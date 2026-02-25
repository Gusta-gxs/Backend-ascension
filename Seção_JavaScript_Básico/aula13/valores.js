/*
Valores primitivos: String, number, boolean, undefined, null, bigint, symbol. > Imutáveis, valores copiados.

let a = 'A';
let b = a; // Cópia, não será alterado se a variável "a" for redeclarada. O VALOR é copiado.

console.log(a, b);

a = 'Outro';
console.log(a, b);

*/

/*
Valores por Referência: Arrays, object, function. > Mutáveis, passados por referência.

*/

/*
let a = [1, 2, 3];
let b = a;  // Valor aponta para o mesmo local na memória, não copia.

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop(4);
console.log(a, b); // Conclusão: Se a ou b for alterado, o local na memória irá mudar, assim afetando o valor da variável.

*/

// Caso queira COPIAR o valor a para o b, é possível da seguinte forma:

let a = [1, 2, 3];
let b = [...a];  //É um spread, usamos com [...a].
console.log(a, b);

a.push(4);

console.log(a, b);  //Assim, b permanece igual, mesmo se o valor de a for alterado.