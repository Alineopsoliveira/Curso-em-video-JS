var res = window.document.querySelector('section#resultado')
function inicio(){
    var n = Number(window.prompt('Digite um número:'))
    var msg
    if (n % 2 == 0){
        msg = 'PAR!'
    }else{
        msg = 'ÍMPAR!'}
    res.innerHTML = `<p>O número ${n} que foi digitado é: <strong>${msg}</strong></p>`
}