/*
if: Pode ser usado sozinho, abre a estrutura condicional.
else if: Pode ser usada várias vezes, vem apenas depois de um if, e não pode ser o último da estrutura.
else: Após o if, deve ser o último da estrutura, e somente um.
*/

const peso = 73;
const altura = 1.8;

function calcIMC() {
    return peso / (altura * altura);
}

if (!altura || altura <= 0 || isNaN(Number(altura))) {  // Primeiro válida se a altura é ou não igual a 0 ou false.
    console.log("Digite uma Altura Válida.");
} else { // se não for, vai gerar o cálculo.
    const imc = calcIMC();
    console.log(imc.toFixed(2));

    if (imc < 16) { // O cálculo foi concluído, agora vai avaliar onde o resultado está na tabela de IMC.
        console.log("Magreza Grave");
    } else if (imc < 17) {
        console.log("Magreza Moderada");
    } else if (imc < 18.6) {
        console.log("Magreza Leve");
    } else if (imc < 25) {
        console.log("Peso Ideal");
    } else if (imc < 30) {
        console.log("Sobrepeso");
    } else if (imc < 35) {
        console.log("Obesidade Grau I");
    } else if (imc < 40) {
        console.log("Obesidade Grau II ou Severa");
    } else {
        console.log("Obesidade Grau III ou Mórbida");
    }
}
