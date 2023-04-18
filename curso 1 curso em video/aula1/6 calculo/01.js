function somar() {
    var text1 = document.getElementById("text1");
    var text2 = document.querySelector("input#text2");
    var res = document.getElementById("res");
    var n1 = Number(text1.value);
    var n2 = Number(text2.value);
    var s = n1 + n2;
    res.innerHTML = `Resultado de:  ${n1} + ${n2} e ${s}`;
  }