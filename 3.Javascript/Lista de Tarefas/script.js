const inputTarefa = document.querySelector('.input-tarefa')
const botaoTarefa = document.querySelector('.botao-tarefa')
const lista = document.querySelector('.lista')

inputTarefa.focus()

botaoTarefa.addEventListener('click', (e) => {
    if (!inputTarefa.value) return
    criarTarefa(inputTarefa.value)
})

function criarTarefa (inputValue) {
    const li = document.createElement('li')
    lista.appendChild(li)
    li.innerText = inputValue
    AdicionarBotao(li)
    limparInput()
    inputTarefa.focus()
    salvarTarefas()
}

inputTarefa.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criarTarefa(inputTarefa.value)
    }
})

function limparInput() {
    inputTarefa.value = ""
}

function AdicionarBotao(li) {
    const botao = document.createElement('button')
    botao.innerText = 'Apagar'
    botao.setAttribute('class','apagar')
    li.appendChild(botao)
}

document.addEventListener('click', (e) => {
    el = e.target
    if (el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas() {
    const tarefas = lista.querySelectorAll('li')
    const ArrayDasTarefas = []
    for (let tarefa of tarefas) {
        const tarefaTexto = tarefa.innerText.replace('Apagar','')
        ArrayDasTarefas.push(tarefaTexto) 
    }
    const tarefasJSON = JSON.stringify(ArrayDasTarefas)
    localStorage.setItem("tarefas", tarefasJSON)
}

function carregarTarefas () {
    const TarefasBackup = JSON.parse(localStorage.getItem('tarefas'))
    for (let tarefa of TarefasBackup){
        criarTarefa(tarefa)
    }
    console.log(TarefasBackup);
}

carregarTarefas()