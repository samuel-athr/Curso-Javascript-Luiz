const mostrarHorario = (data) => {
    if (data && !(data instanceof Date) ) {
        throw new TypeError('Insira uma instância de Date valida')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12 : false,
        hour : '2-digit',
        second : '2-digit',
        minute : '2-digit'
    })
}

try {
    
const data = new Date('01-01-1970 16:43:24')
const hora = mostrarHorario(11)

console.log(hora);

} catch (er) {
    console.log(er);

} finally {
    console.log("Tenha um bom dia!");
}
