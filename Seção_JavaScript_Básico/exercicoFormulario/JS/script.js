function meuEscopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = Number(form.querySelector(".peso").value);
        const altura = Number(form.querySelector(".altura").value);
        const imc = peso / (altura * altura);

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso,
            altura: altura,
            imc: imc.toFixed(2)
        };

        pessoas.push(pessoa);

        console.log(pessoas);

        form.reset();

        function totalPessoal () {
            return pessoas.length;
        }

        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} foi adicionado(a)!</p>`;
        resultado.innerHTML += `<p>Temos o total de ${totalPessoal()} pessoas!</p>`;
    }


    form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
