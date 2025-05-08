var maçãs = Number(11);   //input da quantidade das maçãs.
if (maçãs <= 12) {    //se o valor for 12 ou menos sera R$ 0,30 por unidade.
    console.log("o valor total das maçãs é de R$ 0,30 por unidade, totalizando R$ " + maçãs * 0.30)
}
else {
    console.log("o valor total das maçãs é de R$ 0,25 por unidade, totalizando R$ " + maçãs * 0.25)    //se o valor for 12 ou mais será R$ 0,25 pro unidade.
}