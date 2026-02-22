let num1 = 10;
let num2 = 2.5;


// console.log(num1.toString() + num2);  > transforma o num1 em STRING TEMPORARIAMENTE;
// num1 = num1.toString();  > Transforma (redeclara) o valor da variaável para STRING.

// console.log(num1.toString(2));  > Permite vermos o valor binário do número.

// console.log(num1.toString(2));  > Mostra o valor binário do número na variável.

// console.log(num1.toFixed(2));  > Arredonda o valor e limita as casas decimais.

// console.log(Number.isInteger(num1));  > Consulta se o número da variável é um inteiro ou não.

// let temp = num1 * 'Oi';

// console.log(Number.isNaN(temp));  > Consulta se o valor da variável é um NaN.

num1 = 0.7;
num2 = 0.1;

/* num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1

num1 = Number(num1.toFixed(2));  > Uma forma de solucionar o problema do erro final

Outra forma é a seguinte:
*/

num1 = ((num1 * 100) + (num2 * 100)) / 100;

console.log(num1);
console.log(Number.isInteger(num1))
