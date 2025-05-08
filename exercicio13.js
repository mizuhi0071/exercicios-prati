let soma = 0;
let quantidade = 0;
while (true) {
    let numero = parseFloat(prompt("Digite um número decimal (0 para sair):"));
    if (numero === 0) {
        break; // Encerra o loop quando o usuário digita 0
    }
    soma += numero;
    quantidade++;
}
if (quantidade > 0) {
    let media = soma / quantidade;
    console.log(`A média dos números digitados é: ${media}`) // Exibe a média dos números digitados
}