var b1 = window.document.querySelector('input#pri')
var b2 = window.document.querySelector('input#seg')
var b3 = window.document.querySelector('input#ter')

b1.addEventListener('click' , primeira)
b2.addEventListener('click' , segunda)
b3.addEventListener('click' , terceira)

function primeira(){
    window.alert('Você clicou no 1° botão!')
}
function segunda(){
    window.alert('Você clicou no 2° botão!')
}
function terceira(){
    window.alert('Você clicou no 3° botão!')
}