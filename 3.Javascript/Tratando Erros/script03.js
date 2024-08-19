function mostrarHorario (date) {
    date = new Date() 

    date.toLocaleTimeString("pt-BR", {
        hour12 : false
    })

    return date
}


const timer = setInterval(function(){
  console.log(mostrarHorario());
}, 1000)

setTimeout(() => {
  clearInterval(timer)
}, 5000);

setTimeout(() => {
  console.log("Acabou!");
}, 10000)