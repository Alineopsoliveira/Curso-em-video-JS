var agora = new Date()
var horas = agora.getHours() //comando para pegar a hora atual do sistmea
console.log(`São exatamente ${horas} horas.`)
if(horas < 12 ){
    console.log('Bom Dia!')
}else if (horas <= 18){
    console.log('Boa Tarde!')
 }else if( horas >= 18  ) {
    console.log('Boa Noite!')
 }
