function tipoTriangulo(a, b, c) {      // verifica se os valores colocados formam um triângulo.
  if (a + b > c && a + c > b && b + c > a) {    //determina qual tipo de triângulo vai ser.
      if (a === b && b === c) {
          return "Triângulo Equilátero";
      } else if (a === b || a === c || b === c) {
          return "Triângulo Isósceles";
      } else {
          return "Triângulo Escaleno";
      }
  } else {
      return "Os valores inserifos não formam um triângulo.";   //se o valor inserido for invalido aparecera isso.
  }
}
  console.log(tipoTriangulo(10, 10, 10)); // coloque aqui o valor que deseja testar.
