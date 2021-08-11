function solucao(sequencia) {
	let imagem = 0
    for (let seta of sequencia) {
        if (seta === ">") {
            if (imagem === 6) {
                imagem = 0
            } else {
                imagem++
            }
        } else {
            if (imagem === 0) {
                imagem = 6
            } else {
                imagem--
            }
        }
    }
 console.log(imagem)
}