function verif(){

    let data = new Date()

    let ano = data.getFullYear()

    let fAno = document.querySelector("#txtano")

    let res = document.querySelector("#res")

    if(fAno.value.length == 0 || Number(fAno.value) > ano ){
        alert("[ERRO] Verifique os dados e tente novamente")
    }else {
       let sex = document.getElementsByName("radsex")

       let idade = ano - Number(fAno.value)

       let genero = ""

       var img = document.createElement("img")
       img.setAttribute("id, foto")
       
       if (sex [0].checked){
        genero = "Masculino"
        if(idade >= 0 && idade < 10){
            //criança
       // document.querySelector.innerHTML = img.src = "criançaH.png"
        } else if (idade >= 10 && idade < 21){
            //jovem
       // document.querySelector.innerHTML = img.src = "jovemH.png"
       img.setAttribute("src","../jovemH.png")
        } else if (idade < 21){
            //adulto
       document.querySelector.innerHTML = img.src = "homem.png"    
        }else if(idade < 50){
            //idoso
        document.querySelector.innerHTML = img.src = "velhoH.png"
        }

    }else if (sex [1].checked){
          genero = "Feminono"
       }
       if(idade >= 0 && idade < 10){
        //criança
        document.querySelector.innerHTML = img.src = "criançaM.png"
    } else if (idade >= 10 && idade < 21){
        //jovem
        document.querySelector.innerHTML = img.src = "jovemM.png"
    } else if (idade < 21){
        //adulto
    document.querySelector.innerHTML = img.src = "mulher.png"
    }else if(idade < 50){
        //idoso(a)
    document.querySelector.innerHTML = img.src = "velhaM.png"
    }
       res.style.textAlign = "center"
       res.innerHTML = `Detectamos ${genero} com a idade: ${idade} anos`
       res.appendChild(img)
    }

}



// document.querySelector.innerHTML = img.src = "img/tarde.png";