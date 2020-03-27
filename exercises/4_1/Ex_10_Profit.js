let costOfProduct = 10;
let saleValue = 13;

if (costOfProduct > 0 && saleValue >0){
    let totalProfit = ((saleValue - costOfProduct * 1.2) * 1000);
    console.log(totalProfit);
} else {
    console.log("Erro: Um dos valores eh menor que zero");
}