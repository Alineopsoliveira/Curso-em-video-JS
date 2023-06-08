var idade = 25
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('não vota')
} else if (idade < 18 || idade > 65 ){
    console.log('Voto não obrigátorio')
}else{
    console.log('Voto obrigátorio')
}