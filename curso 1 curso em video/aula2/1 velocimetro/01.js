function calcular() {
    var txtv = document.getElementById("textvel");
    var res = document.getElementById("r");
    var vel = Number(txtv.value);
   r.innerHTML = ( `<p>sua velocidade atual e de <strong>${vel} km/h</strong></p>`);
   if(vel > 60){
      r.innerHTML += (`<p>Velocidade acima da media <strong>!!MULTADO!!</strong></p>`);
   }
  }