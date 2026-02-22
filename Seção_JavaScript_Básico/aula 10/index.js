const alunos = ['Gustavo', 'José', 'Marcos', 'Danilo']; // Uma array com um tipo de dado, somente.

// console.log(alunos[0]);  > Retorna o objeto de ÍNDICE 0.
// console.log(alunos[2]);  > Retorna o objeto de ÍNDICE 2.


// alunos[0] = 'Gabriel'; > Altera o objeto de índice 0.
// alunos[4] = 'Junior';  > Adiciona no fim da Array um objeto de índice 4.

// console.log(alunos.length);  > Retorna a medida do Array, mas sem o zero, o que a deixa com 1 a mais do que o índice;

// alunos.push('Otávio');  > Adiciona um elemento ao final da Array.
// alunos.push('Miranda');

// alunos.unshift('Luiza');  > 
// alunos.unshift('Henrique');  > Adiciona no início da Array.

// alunos.pop();  > Remove o último.

// const removido = alunos.pop();
// console.log(removido);  > O item final que foi removido por pop(), foi salvo na variável 'removido'.

// alunos.shift();  > Remove o primeiro objeto.

// const removido = alunos.shift();
// console.log(removido);  > O item inicial que foi removido por shi ft(), foi salvo na variável 'removido'.

// delete alunos[2];  > Remove um objeto sem alterar os índices.

// console.log(alunos.slice(0, 2));  > Fatia do 0 ao 2, mas não inclui o índice 2(último índice).
// console.log(alunos.slice(0, -1)); > Fatia do 0 ao penúltimo índice, assim como na String.

console.log(alunos);