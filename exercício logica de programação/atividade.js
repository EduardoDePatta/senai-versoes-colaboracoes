//Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente

//Se a peça possuir um peso superior a 100 gramas, pode cadastrar

//Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

var listaPecas = ["Amortecedor","Motor","Correia Dentada","Filtro de ar","Pneu 14","Farol"];
var listaLength = listaPecas.length;

if (listaLength > 10){
    console.log("Não é possível cadastrar por excesso de peças");
}else{
    console.log("Limite Permitido.");
}

let peso = 120;

if (peso > 100){
    console.log("Peso Permitido");
}else {
    console.log("Peso acima do normal");
}

let peca = "Farol"
if (peca.length < 3){
    console.log("O nome da peça é muito pequeno")
}else{
    console.log("Nome da peça permitido.")
}
