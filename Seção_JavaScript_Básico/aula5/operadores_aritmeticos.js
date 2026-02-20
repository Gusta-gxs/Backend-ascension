/*

+ adição e concatenação
- subtração
* multiplicação
/ divisão
** potenciação
% resto da divisão
++ é o valor da variável mais 1

const num1 = 10;
const num2 = 4;
const soma = num1 + num2;
const sub = num1 - num2;
const vezes = num1 * num2;
const divisao = num1 / num2;
const potenc = num1 ** num2;
const resto = num1 % num2;

console.log(soma);
console.log(sub);
console.log(vezes);
console.log(divisao);
console.log(potenc);
console.log(resto);

ou
*/ 

const num1 = 10;
const num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log(num1 + num1 * num2) // segue a precedência da matemática.

/* Precedência:
()
**
* / %
+ -
*/

let contador = 4;
contador++;
console.log(contador);