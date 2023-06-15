var resultado = window.document.querySelector('section#res')

function calcular(){
    var aluno = window.prompt('Qual é o nome do aluno?')
    var nota1 = Number(window.prompt(`Qual foi a primeira nota de ${aluno}?`))
    var nota2 = Number(window.prompt(`Alem de ${nota1}, qual foi a outra nota de ${aluno}?`))
    var m = (nota1 + nota2)/2
   
    var msg
    if (!(m <= 5)){   
       var msg = 'Meus Parabéns'
    } else{ 
        var msg = 'Estude um pouco mais!'
    }

    resultado.innerHTML = `<p>Calculando a média final de <mark>${aluno}</mark>.</p>`
    resultado.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`
    resultado.innerHTML += `<p>A média final será <mark>${m}</mark>.</p>`
    resultado.innerHTML += `<p> A mensagem que temos é: <strong style='color:red;' >${msg}</strong></p>.`
}