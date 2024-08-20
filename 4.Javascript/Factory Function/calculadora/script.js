function calculadora () {
    return{
        display: document.querySelector(".display"),   

        iniciar(){
            alert("Olá iniciei!")
            this.clique()
        },

        clique() {

            document.addEventListener('click', (e) => {
                const el = e.target

                if ( el.classList.contains("btn-num") ){
                        this.mostrarDisplay(el.innerText)
                    }

                if (el.classList.contains("btn-clear")){
                    this.limparDisplay()
                }

                if (el.classList.contains("btn-eq")) {
                    this.fazerConta(this.display.value)
                } 

                if (el.classList.contains("btn-del")) {
                    this.apagaUm()
                }

            })
        },

        mostrarDisplay(el){
            this.display.value += el
        },

        limparDisplay(){
            this.display.value = ""
        },

        fazerConta(el){
            try{
                const resultado = eval(el) 
                if ( !(resultado) ) {
                    alert('Conta inválida')
                    return
                }

                this.limparDisplay()
                this.mostrarDisplay(resultado)

            }catch{
                alert('Conta inválida')
                return
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        }

    }
}

const calc = calculadora()
calc.iniciar()
