var res = window.document.querySelector('section#res')

function clicar(){
    var n1 = Number(window.prompt('Digite um número:'))
    var n2 = Number(window.prompt('Digite utro número:'))
    var maior
    var msg
    if(n1 > n2){
        maior = n1
        msg = 'o maior valor é'
    } else if (n1 == n2){
        maior = 'IGUAIS'
        msg = 'ambos são'
    }else {
        maior = n2
        msg = 'o maior valor é'
    }
    res.innerHTML = `<p>A analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ${msg} <strong>${maior}</strong></p>`
}