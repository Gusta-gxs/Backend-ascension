let num1 = 16;

// let num2 = Math.floor(num1); > Arredonda o número para baixo, ou seja, para o menor número inteiro mais próximo.
// let num2 = Math.ceil(num1); > Arredonda o número para cima, ou seja, para o maior número inteiro mais próximo.
// let num2 = Math.round(num1);  > Arredonda o número para o número mais próximo, ou seja, para o número inteiro mais próximo. Se a parte decimal for 0.5 ou maior, arredonda para cima; caso contrário, arredonda para baixo.
// console.log(Math.max(1,2,3,100,5,9,18,-98,-12,64,8,10));  > Retorna o maior número entre os argumentos fornecidos.
// console.log(Math.min(1,2,3,-134,5,9,18,-98,-12,64,8,10));  > Retorna o menor número entre os argumentos fornecidos.
// const aleatorio = Math.random();  > Gera um número aleatório entre 0 e 1, mas nunca 0 ou 1.
// const aleatorio = Math.round(Math.random() * (10 - 5) + 5); > Gera um número aleatório entre 1 a 5, arredondando para o número inteiro mais próximo.
// console.log(num1 ** 0.5);  > Calcula a raiz quadrada no número em questão.

num1 = 100 / 0;
console.log(num1);  // > Isso retorna o resultado infinity, e é avaliado no booleano como true, ou seja, é um valor infinito, mas é um valor numérico.
