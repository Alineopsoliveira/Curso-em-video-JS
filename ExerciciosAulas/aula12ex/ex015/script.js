//esse programa irá detectar idade e gênero e mostrar o resultado com imagem de acordo com a idade informada

function verificar(){
   var data = new Date // com essa função eu posso buscar datas e horários
   var ano = data.getFullYear() // essa função tráz o ano com 4 dígítos --> indico a var que irá receber o valor do new date
   var fano = document.querySelector('input#txano')
   var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = window.document.getElementsByName('txsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
           
            if(idade >= 0 && idade < 10){
                genero = 'criança'
                img.setAttribute( 'src' , 'bebe-m.png')
            } else if(idade < 21){
                genero = 'jovem'
                img.setAttribute('src' , 'adolescente-m.png')
            } else if (idade < 45 ){
                genero = 'homem'
                img.setAttribute('src' , 'homem.png')
            }else{
                genero = 'idoso'
                img.setAttribute('src' , 'idoso.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute( 'src' , 'bebe-f.png')
            } else if(idade < 21){
                img.setAttribute('src' , 'adolescente-f.png')
            } else if (idade < 45 ){
                img.setAttribute('src' , 'mulher.png')
            }else{
                img.setAttribute('src' , 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

    }