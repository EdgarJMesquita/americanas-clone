
const CarrosselCategorias = {
    index: 0,
    posicoes: [0,-1265,-2525],
    sliders: document.querySelector('.sliders-categorias'),

    move(index){
    
        this.index+=Number(index)

        if(this.index<0) this.index = this.posicoes.length-1;
        if(this.index>this.posicoes.length-1) this.index=0
        
        this.sliders.style.transform=`translateX(${this.posicoes[this.index]}px)`
      
    },
    
    start(){
        const categoriasArrows = document.querySelectorAll('.arrow-categorias');
        categoriasArrows.forEach(arrow=>{
            arrow.addEventListener('click',(e)=>this.move(e.target.dataset.name))
        })
    }
}

export default CarrosselCategorias