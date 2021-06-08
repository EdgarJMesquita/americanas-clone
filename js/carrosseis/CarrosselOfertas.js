
const CarrosselOfertas = {
    index:0,
    carrossel: document.querySelector('.sliders-ofertas'),
    posicoes:[0,-1250,-2500,-3750,-5000,-6250,-7500,-8750,-10000,-11250,-12500,-13750],

    move(e){
        this.index +=Number(e)
        
        if(this.index<0) this.index = this.posicoes.length-1
        if(this.index>this.posicoes.length-1) this.index = 0 
        
        this.carrossel.style.transform = `translateX(${this.posicoes[this.index]}px)`
        
    },

    start(){
        const arrows = document.querySelectorAll('.arrow-ofertas');
        arrows.forEach(arrow=>{
            arrow.addEventListener('click',(e)=>{
               this.move(e.target.dataset.value)
            })
        })
        setInterval(()=>{
            arrows[1].click()
        },20000)
    }
} 

export default CarrosselOfertas