function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                 // Criança
                 img.setAttribute('src', 'https://cdn.discordapp.com/attachments/914344565073412126/923232064663355474/crianca-menino.jpg')
            } else if  (idade < 25) {     
                // Jovem
                 img.setAttribute('src', 'https://cdn.discordapp.com/attachments/914344565073412126/923233646415052880/homem-jovem.jpg')
            }else if (idade < 50) {
               //  Adulto 
                 img.setAttribute('src', 'https://cdn.discordapp.com/attachments/914344565073412126/923233865345167460/homem-adulto.jpg')
            }else{
              // Idoso
                img.setAttribute('src', 'https://cdn.discordapp.com/attachments/914344565073412126/923234090814160897/homem-idoso.jpg')
            }
            }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                // Criança
                img.setAttribute('src' , 'https://cdn.discordapp.com/attachments/914344565073412126/923235919874654228/crianca-menina.jpg')
           } else if  (idade <25) {     
               // Jovem
               img.setAttribute('src' , 'https://cdn.discordapp.com/attachments/914344565073412126/923235920705097768/mulher-jovem.jpg')
           }else if (idade < 50) {
              //  Adulto 
              img.setAttribute('src' , 'https://cdn.discordapp.com/attachments/914344565073412126/923235920239550494/mulher-adulta.jpg')

           }else{
             // Idoso
             img.setAttribute('src' , 'https://cdn.discordapp.com/attachments/914344565073412126/923235920482795570/mulher-idosa.jpg')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}
