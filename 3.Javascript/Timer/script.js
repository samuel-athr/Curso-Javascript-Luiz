const timer = document.querySelector(".timer")
const iniciar = document.querySelector(".iniciar")
var seconds = 0
let atualizarTimer

// Função que cria uma date com formatação de timer
function formatSeconds (seconds = 0){
    var date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

//Adiciona funcionalidade aos botoes
document.addEventListener('click', (e) => {
    el = e.target

    if (el.classList.contains('iniciar')){
        if (!(el.classList.contains('iniciado'))){
        iniciarTimer()
        el.classList.add('iniciado')
    }
        timer.classList.remove('pausado')
    }

    if(el.classList.contains('pausar')){
        iniciar.classList.remove('iniciado')
        clearInterval(atualizarTimer)
        timer.classList.add('pausado')       
    }

    if(el.classList.contains('zerar')){
        seconds = 0
        timer.innerHTML = '00:00:00' 
    }
})

//Função que atualiza o timer 
function iniciarTimer(){
        atualizarTimer = setInterval( () => {
        seconds++;
        timer.innerHTML = formatSeconds(seconds)
    }, 1000);
}