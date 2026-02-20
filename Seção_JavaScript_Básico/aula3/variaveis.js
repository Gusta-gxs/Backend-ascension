let nome = 'Junior'; //string
let idade; //Declarada mas não definida
idade = 21;

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');
console.log('Gustavo tem', idade, 'anos');

idade = 22;

console.log('Gustavo tem', idade, 'anos');

// REGRAS:

// Não podemos criar variáveis com palavras reservadas, ex: let let; let if;  let console; let const; etc. -> gera erro.
// Variáveis precisam ter nomes significativos, não posso colocar o nome de uma variável usada em idade como "batata" ou "n".
// Não podemos começar o nome de uma variável com número, não posso chamar de "1nome" ou "5idade".
// Variáveis que não são funções construtoras devem começar com letra minúscula.
// Não podem conter espaços ou traços no nome.
// Utilizamos camelCase, ex: "nomeCompletoDoCliente".
// São Case-sensitive, ou seja, letra maíuscula ou minúscula faz diferença.
// Não podemos redeclarar variáveis com let.
// NÃO UTILIZAR VAR, UTILIZE LET.