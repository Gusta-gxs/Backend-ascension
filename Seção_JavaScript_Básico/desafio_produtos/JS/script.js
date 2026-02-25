function meuEscopo () {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');
    const total = document.querySelector('.total');

    const lista = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const produto = form.querySelector('.produto');
        const preco = Number(form.querySelector('.preco').value);

        const produtoNovo = {
            produto: produto.value,
            preco: preco,
            codigo: Math.round(Math.random() * (1000 - 100) + 100)
        }

        lista.push(produtoNovo);

        console.log(lista);

        form.reset();

        total.innerHTML = `<p>Total de produtos: ${lista.length}</p>`;
        resultado.innerHTML += `<p>${produtoNovo.produto}: R$ ${produtoNovo.preco.toFixed(2)} , seu código: é ${produtoNovo.codigo}</p>`;
    }

    form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();