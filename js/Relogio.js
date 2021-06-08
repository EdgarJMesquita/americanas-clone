class Re {
    constructor(id,interval,time,agora){
        this.id = id
        this.interval = interval
        this.time = time
        this.agora = agora
        this.count = 0
    }
    start(){
        this.count = this. agora
        let relogio = document.querySelector(`#relogio-${this.id}`)
        let txt = document.querySelector(`#relogio-txt-${this.id}`)

        relogio.setAttribute('stroke-dasharray',`${this.agora*(282/this.time)} 283`)
        txt.textContent = (this.agora.toString()).padStart(2,'0')

        setInterval(()=>{
            this.count--
            relogio.setAttribute('stroke-dasharray',`${this.count*(282/this.time)} 283`)
            txt.textContent = (this.count.toString()).padStart(2,'0')
            if(this.count==0) this.count = this.time
        },this.interval)

    }
}

const Relogio = {
    start(){

        if(!localStorage.time) {
            let D = new Date()
            let Horas = D.getHours()
            let Minutos = D.getMinutes()
            let Segundos = D.getSeconds()
            localStorage.setItem('time',JSON.stringify({Horas,Minutos,Segundos}))
        }
            
        const { Horas, Minutos, Segundos } = JSON.parse(localStorage.getItem('time'))

        console.log(`${Horas}:${Minutos}:${Segundos}`)

        let Hora = new Re(1, 3600000, 24 ,Horas)
        let Minuto = new Re(2, 60000, 60 ,Minutos)
        let Segundo = new Re(3, 1000, 60 ,Segundos)

        Hora.start()
        Minuto.start()
        Segundo.start()

        window.onbeforeunload = ()=>{
           let horaSalva = {
               Horas: Hora.count,
               Minutos: Minuto.count,
               Segundos: Segundo.count
           }
           localStorage.setItem('time',JSON.stringify(horaSalva))
       } 
    }
}

export default Relogio


