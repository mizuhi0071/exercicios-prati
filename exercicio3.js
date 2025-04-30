var Nota = Number(8);   //input do valor da nota.
if (Nota >= 6) {    //se o valor for 6 ou mais aparece como aprovado.
    console.log("Aprovado")
}
else if (Nota >= 3) {   //se o valor for 3 ou mais, aparece como recuperação.
    console.log("Recuperação")
}
else {
    console.log("Reprovado")    //se nenhum dos valores anteriores for adicionado, aparece reprovado.
}