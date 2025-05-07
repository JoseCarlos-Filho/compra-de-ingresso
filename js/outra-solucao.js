const {log} = console;

function comprar() {
    const tipoIngresso = document.getElementById("tipo-ingresso").value;
    const elementoQuantidade = document.getElementById("qtd").value;

    if (!tipoIngresso) {
        alert("Selecione um tipo de ingresso!");
        return;
    }

    if(!elementoQuantidade) {
        alert("Por favor, digite a quantidade de ingressos!");
        return;
    }

    const qtd = parseInt(elementoQuantidade);

    if(isNaN(qtd) || qtd <= 0) {
        alert("Digite uma quantidade válida de ingressos!");
        document.getElementById("qtd").value = "";
        return;
    }
}