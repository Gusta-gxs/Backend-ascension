function saudacao(nome) { // Função com nome "saudacao" e parâmetro "nome".
//  console.log(`Bom dia ${nome}!`); Executado pela função.
    return `Bom dia ${nome}!`;
}

// saudacao('Gustavo');  > Valor atribuído ao parâmetro "nome" da função.

const variavel = saudacao('Gustavo');
console.log(variavel);