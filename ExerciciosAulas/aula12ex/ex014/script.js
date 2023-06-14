function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var tx = window.document.getElementById('s')
    var hora = new Date()
    var agora = hora.getHours()
    //var agora = 19
    msg.innerHTML =`Agora são ${agora} horas.`
    if(agora >= 0 && agora <= 12 ){
        //Bom Dia
        img.src = 'manha.png'
        document.body.style.background ='#e7d4b9'
        tx.innerHTML = 'Bom Dia!'
        
    }else if(agora > 12 && agora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#8c5117'
        tx.innerHTML = 'Boa Tarde!'
        //Boa Tarde

    }else{
        //Boa Noite
        img.src = 'noite.png' 
        document.body.style.background = '#181f22'
        tx.innerHTML = 'Boa Noite!'
    }
}