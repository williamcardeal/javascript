var a = document.getElementById("area");
a.addEventListener("click", mouse);
a.addEventListener("mouseenter", entrar);
a.addEventListener("mouseout", sair);

var a = document.getElementById("area");
function mouse() {
  a.innerText = "clicou!";
  a.style.backgroundColor = "red";
}
function entrar() {
  a.innerText = "entrou!";
  a.style.backgroundColor = "blue";
}
function sair() {
  a.innerText = "Saiu!";
  a.style.backgroundColor = "green";
}