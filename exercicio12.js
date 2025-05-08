const prompt = require('prompt-sync')(); // Importa a biblioteca para entrada do usuário
const numero = parseInt(prompt('Digite um número para ver a tabuada: '));// o usuário digita um número
console.log(`Tabuada do ${numero}:`);  // Exibe a tabuada do número digitado
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);   // Calcula e exibe o resultado da multiplicação
}

