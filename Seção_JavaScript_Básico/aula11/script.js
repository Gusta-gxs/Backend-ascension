// function soma (x = 1, y = 1) {
//     const resultado = x + y;
//     return resultado
// }

// const resultado = soma(4, 5);
// console.log(resultado);

// const resul = soma('Luiz', ' Pedro');
// console.log(resul);

// console.log(soma(3, 8)); > Soma 3 e 8.
// console.log(soma(21, 7));

/*

Outra forma de criar função: Função Anônima.

const raiz = function (n) {
    return Math.sqrt(n);
};

console.log(raiz(16));

Arrow Function:
*/

const raiz = n =>  Math.sqrt(n);

console.log(raiz(9));