function verif() {
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.querySelector("#txtano");
    var res = document.querySelector("#res");
  
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
      alert("[ERRO] Verifique os dados e tente novamente");
    } else {
      let sex = document.getElementsByName("radsex");
      let idade = ano - Number(fAno.value);
      let genero = "";
  
      var img = document.createElement("img");
      img.setAttribute("id", "foto");
  
      if (sex[0].checked) {
        genero = "Masculino";
        if (idade >= 0 && idade < 10) {
          //criança
          img.src = "img/criançaH.png";
        } else if (idade >= 10 && idade < 21) {
          //jovem
          img.src = "img/jovemH.png";
        } else if (idade > 21) {
          //adulto
          img.src = "img/homem.png";
        } else if (idade > 50) {
          //idoso
          img.src = "img/velhoH.png";
        }
      } else if (sex[1].checked) {
        genero = "Feminino";
        if (idade >= 0 && idade < 10) {
          //criança
          img.src = "img/criançaM.png";
        } else if (idade >= 10 && idade < 21) {
          //jovem
          img.src = "img/jovemM.png";
        } else if (idade > 21) {
          //adulto
          img.src = "img/mulher.png";
        } else if (idade > 50) {
          //idoso(a)
          img.src = "img/velhaM.png";
        }
      }
      res.style.textAlign = "center";
      res.innerHTML = `Detectamos ${genero} com a idade: ${idade} anos`;
      res.appendChild(img);
    }
  }