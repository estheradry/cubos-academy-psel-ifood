function solucao(precos) {
    let soma = 0
    for (let preco of precos) {
     soma = preco + soma   
    }
    let compra = 0
    for (preco of precos) {
        if (preco > 200) {
            compra = preco
        }
    }
if (soma > 1000 && compra > 200){
    console.log("PREMIUM")
} else if (soma > 1000) {
    console.log ("VIP")
} else {
    console.log ("NORMAL")
}
}