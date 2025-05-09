![projeto ingressos](./assets/Logo-e-tricket.png)

# Sistema de Compra de Ingressos

Este é um projeto simples de front-end desenvolvido em JavaScript puro para simular a compra de ingressos para um evento. Ele permite que os usuários selecionem o tipo de ingresso desejado (Pista, Cadeira Superior, Cadeira Inferior) e a quantidade, validando a disponibilidade antes de confirmar a compra.

## Funcionalidades

*   Seleção do tipo de ingresso através de um menu suspenso (`<select>`).
*   Entrada da quantidade de ingressos desejada.
*   Validação para garantir que um tipo de ingresso foi selecionado e que a quantidade é um número positivo.
*   Verificação da disponibilidade de ingressos para o tipo selecionado.
*   Atualização dinâmica da quantidade de ingressos disponíveis na página após uma compra bem-sucedida.
*   Exibição de alertas para o usuário sobre o status da compra (sucesso, quantidade indisponível, erros de entrada).
*   Limpeza automática do campo de quantidade após uma tentativa de compra.

## Como Usar

1.  Certifique-se de que você tem um arquivo HTML (ex: `index.html`) que inclua:
    *   Um elemento `<select id="tipo-ingresso">` com as opções de ingresso (ex: `value="pista"`, `value="superior"`, `value="inferior"`).
    *   Um campo `<input type="number" id="qtd">` para a quantidade.
    *   Um botão para acionar a compra (ex: `<button onclick="comprar()">Comprar</button>`).
    *   Elementos para exibir a quantidade disponível de cada tipo de ingresso, com IDs correspondentes (ex: `<span id="qtd-pista">100</span>`, `<span id="qtd-superior">200</span>`, `<span id="qtd-inferior">400</span>`).
2.  Abra o arquivo HTML no seu navegador.
3.  Selecione o tipo de ingresso desejado.
4.  Digite a quantidade de ingressos.
5.  Clique no botão "Comprar".
6.  O sistema informará o resultado da transação através de um alerta.

## Estrutura do Código (`js/app.js`)

O arquivo `js/app.js` contém a lógica principal da aplicação:

*   **`comprar()`**:
    *   Função principal acionada pelo evento de clique no botão de compra.
    *   Obtém o tipo de ingresso e a quantidade dos campos do HTML.
    *   Realiza validações iniciais (tipo de ingresso selecionado, quantidade válida).
    *   Utiliza uma estrutura `switch` para chamar a função de compra específica baseada no `tipoIngresso`.

*   **`limpaCampoQuantidade()`**:
    *   Função utilitária para limpar o valor do campo de quantidade (`id="qtd"`) após uma tentativa de compra.

*   **`cadeiraInferior(qtda)`**, **`cadeiraSuperior(qtda)`**, **`pista(qtda)`**:
    *   Funções específicas para cada tipo de ingresso.
    *   Cada uma delas:
        *   Obtém o elemento HTML que exibe a quantidade disponível para o respectivo tipo (ex: `document.getElementById("qtd-inferior")`).
        *   Converte a quantidade disponível (texto do elemento) e a quantidade desejada para números inteiros.
        *   Verifica se a quantidade desejada (`qtdaDeCompra`) é maior que a quantidade disponível (`qtda[Tipo]Atual`).
        *   Se houver ingressos suficientes:
            *   Subtrai a quantidade comprada da quantidade disponível.
            *   Atualiza o texto do elemento HTML com a nova quantidade.
            *   Exibe um alerta de "Compra realizada com sucesso!".
        *   Se não houver ingressos suficientes:
            *   Exibe um alerta informando a indisponibilidade.
        *   Chama `limpaCampoQuantidade()` para limpar o campo de entrada.

---