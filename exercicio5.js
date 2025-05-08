var Imc = Number(""); // input do peso

if (isNaN(Imc)) { 
    console.log("Peso Baixo");  
} else if (Imc <= 50) {   
    console.log("Peso Normal"); 
} else if (Imc <= 72) {   
    console.log("Sobrepeso");   
} else {   
    console.log("Obesidade");
}
