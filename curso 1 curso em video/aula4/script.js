function carregar() {
  let msg = window.document.querySelector("#msg");

  let img = window.document.querySelector("#imagem");

  let data = new Date();

  //let hora = data.getHours()
  let hora = 9;

  let minuto = data.getMinutes();

  msg.innerHTML = `Agora são ${hora}:${minuto} horas.`;

  if (hora >= 0 && hora < 12) {
    //bom dia
    document.querySelector.innerHTML = img.src = "img/manha.png";
    document.body.style.background = "#D28291";
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    document.querySelector.innerHTML = img.src = "img/tarde.png";
    document.body.style.background = "#D15F14";
  } else {
    //boa noite
    document.querySelector.innerHTML = img.src = "img/noite.png";
    document.body.style.background = "#523E59";
  }
}
