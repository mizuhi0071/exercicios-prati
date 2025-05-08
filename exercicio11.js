const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let count = 0;

function askNumber() {
    if (count < 5) {
        rl.question(`Digite o ${count + 1}º número: `, (input) => {
            let numero = parseFloat(input);
            soma += numero; // Adiciona o número à soma total
            count++;
            askNumber();
        });
    } else {
        console.log(`A soma total dos números digitados é: ${soma}`);
        rl.close();
    }
}

askNumber();