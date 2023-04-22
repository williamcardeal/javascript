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

       let img = document.createElement("img")
       img.setAttribute("id, foto")
       
       if (sex [0].checked){
        genero = "Masculino"
        if(idade >= 0 && idade < 10){
            //criança
        } else if (idade >= 10 && idade < 21){
            //jovem
        } else if (idade < 21){
            //adulto
        }else if(idade < 50){
            //idoso
        }

    }else if (sex [1].checked){
          genero = "Feminono"
       }
       if(idade >= 0 && idade < 10){
        //criança
    } else if (idade >= 10 && idade < 21){
        //jovem
    } else if (idade < 21){
        //adulto
    }else if(idade < 50){
        //idoso(a)
    }
       res.style.textAlign = "center"
       res.innerHTML = `${genero} ${idade}`
    }

}










 




// document.querySelector.innerHTML = img.src = "img/tarde.png";