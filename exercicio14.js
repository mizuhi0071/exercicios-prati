const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calcularFatorial(n) {
    if (n < 0) {
        return "O fatorial não é definido para números negativos.";
    }
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return `O fatorial de ${n} é: ${fatorial}`;
}
rl.question("Digite um número para calcular o fatorial: ", function(numero) {
    let n = parseInt(numero);
    console.log(calcularFatorial(n));
    rl.close();
});
