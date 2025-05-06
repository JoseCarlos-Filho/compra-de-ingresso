const {log} = console;
// let lista = document.querySelector(".lista");



function comprar() {
    const tipoIngresso = document.getElementById("tipo-ingresso").value;
    const quantidade = document.getElementById("qtd").value;
    // log(tipoIngresso, quantidade);
    if (!tipoIngresso) {
        alert("Selecione um tipo de ingresso");
        return;
    }

    if (!quantidade || quantidade <= 0) {
        alert("Digite a quantidade de ingressos");
        return;
    }

    log(tipoIngresso);
    log(quantidade);

    switch (tipoIngresso) {
        case "inferior" :
            cadeiraInferior(quantidade);
            break;
        case "superior" :
            cadeiraSuperior(quantidade);
            break;
        case "pista" : {
            pista(quantidade);
            break;
        }
        default :
            alert("Selecione um tipo de ingresso");
            break;
    }
}

function cadeiraInferior(qtda) {
    
    let quantidadeInferior = document.getElementById("qtd-inferior");
    let qtdaInferiorAtual = parseInt(quantidadeInferior.textContent);
    let qtdaDeCompra = parseInt(qtda);
    
    if (qtdaDeCompra > qtdaInferiorAtual) {
        alert("Quantidade de cadeiras inferiores indisponível");
        return;
    }

    quantidadeInferior.textContent = qtdaInferiorAtual - qtdaDeCompra;
    alert("Compra realizada com sucesso!");
    document.getElementById("qtd").value = "";
}