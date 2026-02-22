const desafiorandom = document.getElementById('desafio');

const num1 = Math.random() * (10 - 1) + 1;

desafio.innerHTML = `<h1>O número aleatório é: ${num1}</h1><br />`;
desafio.innerHTML += `<p>O número com duas casas decimais: ${num1.toFixed(2)}</p><br />`;
desafio.innerHTML += `<p>O número arredondado: ${Math.round(num1)}</p><br />`;
desafio.innerHTML += `<p>A raíz quadrada do número: ${num1 ** 0.5}</p>`;