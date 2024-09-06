function conversorBinario (valor) {
    let binarioArray = []
    const indice = 2 
    while ( valor > 0) {
        binarioArray.push(valor % indice) 
        valor = Math.floor(valor / indice)
    }
    
    const binarioArrayOrdenado = []
    
    for (let i = 0 ; i < binarioArray.length; i++){
        binarioArrayOrdenado[i] = binarioArray[binarioArray.length - i - 1]
    }

    const binario = binarioArrayOrdenado.join("")
    return binario
}


console.log(conversorBinario(10));

