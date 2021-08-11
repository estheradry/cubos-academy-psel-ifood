function solucao(obras) {
	let maisCara = {
        nome: "Monalisa",
        autor: "Leonardo Da Vinci",
        valor: 0
    }
    for (let obra of obras) {
        if (obra.valor  > maisCara.valor ) {
            maisCara = obra
        }
    } console.log (maisCara.nome)
    
}