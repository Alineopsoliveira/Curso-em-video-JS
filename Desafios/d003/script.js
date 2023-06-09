var ativar = window.document.querySelector('input#clicar')
var res = window.document.querySelector('div#res')

ativar.addEventListener('click' , clicar )
function clicar(){
   var numero = Number(window.prompt('Digite um número qualquer:'))
   var ant = numero - 1
   var suc = numero + 1
   window.alert(`Antes de ${numero}, temos o número ${ant} 
Depois de ${numero}, temos o número ${suc}`)
}