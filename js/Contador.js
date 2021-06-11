
class UnidadeTempo {
    constructor(id,horaAtual,horaFormato) {
        this.path = document.querySelector(`#relogio-${id}`)
        this.text = document.querySelector(`#relogio-txt-${id}`)
        this.count = horaAtual
        this.horaFormato = horaFormato
    }
    start(){
        this.path.setAttribute('stroke-dasharray',`${this.count*(283/this.horaFormato)} 283`)
        this.text.textContent = (this.count.toString()).padStart(2,'0')
    }
    move(){
        this.count--
        if(this.count<0) this.count = this.horaFormato-1
        this.path.setAttribute('stroke-dasharray',`${this.count*(283/this.horaFormato)} 283`)
        this.text.textContent = (this.count.toString()).padStart(2,'0')
    }
}

const Contador = {
    start(){

        if(!localStorage.time){
            let dataAtual = new Date()
            localStorage.setItem('time',JSON.stringify({ 
                H: dataAtual.getHours(),
                M: dataAtual.getMinutes(),
                S: dataAtual.getSeconds()
            }))
        }

        const { H, M, S } = JSON.parse(localStorage.getItem('time'))

        const Horas = new UnidadeTempo('horas',H,24)
        const Minutos = new UnidadeTempo('minutos',M,60)
        const Segundos = new UnidadeTempo('segundos',S,60)

        Horas.start()
        Minutos.start()
        Segundos.start()
       
        setInterval(()=>{

            Segundos.move()

            if(Segundos.count==59) Minutos.move()

            if(Minutos.count==59 && Segundos.count==59) Horas.move()
            
        },1000)

        window.onbeforeunload = ()=>{
            localStorage.setItem('time',JSON.stringify({
                H: Horas.count,
                M: Minutos.count,
                S: Segundos.count
            }))
        }
    }
}
export default Contador