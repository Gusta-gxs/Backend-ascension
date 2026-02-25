/*
Operadores de COMPARAÇÃO:

>   - Maior que
>=  - Maior que ou igual a
<   - Menor que
<=  - Menor que ou igual a
==  - Igualdade (valor), não devemos usar.
=== - Igualdade estrita (valor e tipo)
!=  - Diferente (valor), não devemos usar.
!== - Diferente estrito (valor e tipo)

Sempre que usarmos um desses operadores, irá retornar um valor boolean, ou seja, true ou false.
*/

const num1 = 10;
const num2 = 5;

// const comp = num1 > num2;  - true
// const comp = num1 >= num2;  - true
// const comp = num1 < num2;  - false
// const comp = num1 <= num2;  - false
// const comp = num1 === num2;  - false
const comp = num1 !== num2;  // true

console.log(comp);
