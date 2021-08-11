function solucao(primeiraLetra, segundaLetra, palavras) {
	let controle = 0
    for (let palavra of palavras) {
        if (primeiraLetra === palavra[0] && segundaLetra === palavra[1] ) {
            controle++
            console.log(palavra)
        }
    } 
    if (controle === 0){
        console.log("NENHUMA")
    }

}