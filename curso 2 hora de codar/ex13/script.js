var lista = ["laranja", "manga", "banana", "limao", "morango"];
var listaUl = document.createElement("ul");
var body = document.getElementsByTagName("body");
console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName("ul");

console.log(listaNoBody[0]);
for (var x = 0; x < lista.length; x++) {
  var lifor = document.createElement("li");

  var texte1 = document.createTextNode(lisra[x]);

  lifor.appendChild(texte1);
  console.log(lista[x]);
}
