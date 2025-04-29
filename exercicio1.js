let numero = Number("50"); // input do número desejado

if (isNaN(numero)) {    //se o valor for invalido aparece isso
    console.log("Número inválido");
} else if (numero % 2 === 0) {
    console.log("O número " + numero + " é par.");  //se o numero for par, aparece isso.
} else {
    console.log("O número " + numero + " é ímpar.");    //se o numero for impar, aparece isso.
}
