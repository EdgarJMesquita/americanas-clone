(()=>{
    let index = 0;
    const arrows = document.querySelectorAll('.arrow');
    const carrossel = document.querySelector('#carrossel-img');
    const images = [
        '06.06_home_amundo_destaque_desk_vemai.webp',
        '2021.06.02-02-Samsung-SSG-GalaxyA52_americanas-home-destaque-desktop-1250x313.webp',
        '193621428_800201304224602_6302577973515862444_n.webp',
        'DIADOSNAMORADOS_CARTAO_HOME_DESK.webp',
        'encarte_desk_namorados.webp',
        'HOME-acessorios-DESK.webp',
        'HOME-DESK-Banners_Esportes_28-051.webp',
        'HOME-DESK-LIVROS-31-05.webp',
        'HOME-DESK-MOVEIS-31MAIO1.webp',
        'MICROSOFT-M365-americanas-home-destaque-desktop-1250x313.webp',
        'NAMORADOS_HOME_DESTAQUEDESK_v2.webp',
        'Soub_AppHour_02.06.21_Acom_desk.webp'
    ];
    
    arrows.forEach(arrow=>{
        arrow.addEventListener('click',(e)=>{
           
            index += e.target.dataset.name==1? 1:-1

            if(index<0) index = images.length-1
            if(index>images.length-1) index = 0 
           
            carrossel.src = `/imagens/carrossel/${images[index]}`;
        })
    })

    setInterval(()=>{
        arrows[0].click()
    },20000)
    
})();