/*
&& -> AND -> E -> Precisa que todas as expressões sejam verdadeiras para retornar True.
|| -> OR -> OU -> Precisa que só uma expressão seja verdadeira.
! -> NOT -> NÃO -> Inverte o valor da expressão, se é true vira false, se é false vira true.
*/

const expressaoAnd = true && true && true; // Retorna True
//const expressaoAnd = true && false && true; // Retorna False
//console.log(expressaoAnd);

const expressaoOr = false || true || false;  // Retrona True.
// const expressaoOr = false || false || false;  // Retrona False
//console.log(expressaoOr);

console.log(!true); // Uma ! inverte, duas ! retorna pro valor original

const user = 'Gustavo'; // form do usuario
const password = '1234'; // form do usuario

const login = user === 'Gustavo' && password === '1234';
console.log(login)