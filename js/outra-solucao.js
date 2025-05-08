const {log, error} = console;

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

    log(`${qtd} ingresso(s) do tipo ${tipoIngresso}`);

    efetuarCompra(tipoIngresso, qtd);
}

function efetuarCompra(tipoIngresso, qtd) {
    const idElementoQtdaDisponivel = `qtd-${tipoIngresso}`;
    const elementoQtdaDisponivel = document.getElementById(idElementoQtdaDisponivel);

    if(!elementoQtdaDisponivel) {
        alert(`Erro: Não foi possivel encontrar o contador de ingressos para o tipo ${tipoIngresso}`);
        error(`Elemento com ID "${idElementoQtdaDisponivel}" não encontrado.`);
        return;
    }

    const qtdaDisponivel = parseInt(elementoQtdaDisponivel.textContent);

    if(isNaN(qtdaDisponivel)) {
        alert(`Erro: A quantidade disponível para ingressos do tipo "${tipoIngresso}" não é um valor válido`);
        error(`O conteúdo do elemento "${idElementoQtdaDisponivel}" não é um número: ${elementoQtdaDisponivel.textContent}`);
        return;
    }

    log(`Disponível: (${tipoIngresso}): ${qtdaDisponivel}, Tentando comprar: ${qtd}`);

    if(qtd > qtdaDisponivel) {
        alert(`Quantidade indisponível para ingressos do tipo "${tipoIngresso}".`);
        return;
    }
     
}