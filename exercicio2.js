var MedidoDeIdade = Number("19"); //input da idade.

if (isNaN(MedidoDeIdade)) { 
    console.log("Idade inválida");  //se o valor for invalido aparece isso.
} else if (MedidoDeIdade <= 18) {   //se o numero menor que 18, aparece isso.
    console.log("Criança");
} else if (MedidoDeIdade <= 25) {   //se o menor que 25, aparece isso.
    console.log("Adolescente");
} else if (MedidoDeIdade <= 60) {   //se o numero menor que 60, aparece isso.
    console.log("Adulto");
} else {
    console.log("Idoso");   //se o numero nao for algum das alternativas anteriores, aparece isso.
}

