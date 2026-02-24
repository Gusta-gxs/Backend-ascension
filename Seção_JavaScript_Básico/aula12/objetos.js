/*

Primeira forma de criar objetos(simples):

const pessoa1 = {
    nome: 'Gustavo',
    sobrenome: 'Santos',
    idade: 21
}
    const pessoa2 = {
    nome: 'Heitor',
    sobrenome: 'Pereira',
    idade: 44
}

console.log(pessoa1.nome);
console.log(pessoa2.nome);

Retorna o nome das pessoas 1 e 2.

Mas, existe um jeito de fazer as funções criarem os objetos.
*/

/*
Dessa forma, a função retorna um objeto, ou seja, cria um objeto, por isso é chamada de FACTORY.

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Gustavo', 'Souza', 21);
const pessoa2 = criaPessoa('Heitor', 'Souza', 32);

console.log(pessoa1.nome);


Também é possível colocar funções dentro de objetos, assim, passarão a se chamar MÉTODOS.
*/

const pessoa1 = {
    nome: 'Gustavo',
    sobrenome: 'Souza',
    idade: 21,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} está falando oi! Minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();