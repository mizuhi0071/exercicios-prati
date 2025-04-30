const prompt = require("prompt-sync")();

let opção;
do {
    opção = prompt("Escolha uma dessas opções:\n1 - Jogar RDR2\n2 - Jogar Ghost Of Tsushima\n3 - Fazer as atividades do +Prati\n");
    if (!["1", "2", "3"].includes(opção)) {
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
} while (!["1", "2", "3"].includes(opção));

switch (opção) {
    case "1":
        console.log("Você escolheu jogar RDR2");
        break;
    case "2":1
        console.log("Você escolheu jogar Ghost Of Tsushima");
        break;
    case "3":
        console.log("Você escolheu fazer as atividades da +Prati");
        break;
}
