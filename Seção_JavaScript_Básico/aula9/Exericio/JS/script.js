const num1 = Number(prompt('Digite um número:'));

const numTitle = document.getElementById('num_title');
const numText = document.getElementById('texto');

num_title.innerHTML = num1;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${num1 ** 0.5}</p><br />`;
texto.innerHTML += `<p>${num1} é inteiro: ${Number.isInteger(num1)}</p><br />`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(num1)}</p><br />`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num1)}</p><br />`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num1)}</p><br />`;
texto.innerHTML += `<p>Com duas casas decimais: ${(num1.toFixed(2))}</p><br />`;