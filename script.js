
function simularCompra() {

    // Preços dos produtos
    const precoMouse = 89.90;
    const precoTeclado = 199.90;
    const precoHeadset = 149.90;

    // Solicitar as quantidades
    let respostaMouse = prompt("Quantos Mouses Gamer RGB deseja comprar?");
    let respostaTeclado = prompt("Quantos Teclados Mecânicos deseja comprar?");
    let respostaHeadset = prompt("Quantos Headsets Gamer deseja comprar?");

    // Verificar se o usuário cancelou algum prompt
    if (
        respostaMouse === null ||
        respostaTeclado === null ||
        respostaHeadset === null
    ) {
        alert("Simulação cancelada!");
        return;
    }

    // Converter as respostas para números
    let qtdMouse = Number(respostaMouse);
    let qtdTeclado = Number(respostaTeclado);
    let qtdHeadset = Number(respostaHeadset);

    // Validar as quantidades
    if (
        respostaMouse.trim() === "" ||
        respostaTeclado.trim() === "" ||
        respostaHeadset.trim() === "" ||
        !Number.isInteger(qtdMouse) || qtdMouse < 0 ||
        !Number.isInteger(qtdTeclado) || qtdTeclado < 0 ||
        !Number.isInteger(qtdHeadset) || qtdHeadset < 0
    ) {
        alert("Quantidade inválida! Digite números inteiros maiores ou iguais a zero.");
        return;
    }

    // Verificar se algum produto foi selecionado
    if (qtdMouse === 0 && qtdTeclado === 0 && qtdHeadset === 0) {
        alert("Nenhum produto foi selecionado!");
        return;
    }

    // Calcular os subtotais
    let totalMouse = precoMouse * qtdMouse;
    let totalTeclado = precoTeclado * qtdTeclado;
    let totalHeadset = precoHeadset * qtdHeadset;

    // Calcular o total geral
    let totalCompra = totalMouse + totalTeclado + totalHeadset;

    // Montar o resumo
    let resumo = "PIXEL STORE - RESUMO DA COMPRA\n\n";

    resumo += "Mouse Gamer RGB\n";
    resumo += "Quantidade: " + qtdMouse + "\n";
    resumo += "Subtotal: R$ " + totalMouse.toFixed(2) + "\n\n";

    resumo += "Teclado Mecânico\n";
    resumo += "Quantidade: " + qtdTeclado + "\n";
    resumo += "Subtotal: R$ " + totalTeclado.toFixed(2) + "\n\n";

    resumo += "Headset Gamer\n";
    resumo += "Quantidade: " + qtdHeadset + "\n";
    resumo += "Subtotal: R$ " + totalHeadset.toFixed(2) + "\n\n";

    resumo += "-----------------------------\n";
    resumo += "TOTAL: R$ " + totalCompra.toFixed(2);

    // Exibir o resultado
    alert(resumo);
}
