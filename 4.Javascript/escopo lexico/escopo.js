// A função procura variavel do escopo atual até o global
// Por isso é executal o 'Arthur' pois ele está no escopo
// da função

const nome = 'Samuel'
function falaNome () {
    const nome = 'Arthur'
    console.log(nome);
}

function executaFalaNome () {
    
    falaNome()
}

executaFalaNome()