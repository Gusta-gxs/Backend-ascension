// REGRAS:

// Não podemos criar constantes com palavras reservadas, ex: const let; const if;  const console; const const; etc. -> gera erro.
// Constantes precisam ter nomes significativos, não posso colocar o nome de uma constante usada em idade como "batata" ou "n".
// Não podemos começar o nome de uma constante com número, não posso chamar de "1nome" ou "5idade".
// Constante que não são funções construtoras devem começar com letra minúscula.
// Não podem conter espaços ou traços no nome.
// Utilizamos camelCase, ex: "nomeCompletoDoCliente".
// São Case-sensitive, ou seja, letra maíuscula ou minúscula faz diferença.
// Não podemos modificar o valor de uma constante.
// NÃO UTILIZAR VAR, UTILIZE CONST.

const nome = 'Gustavo';

console.log(nome);