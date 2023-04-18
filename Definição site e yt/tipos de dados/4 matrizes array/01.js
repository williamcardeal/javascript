//Existe uma estrutura de dados especial chamada Array

// Array vazio
let arr = new Array();
//Array vazio
let arrr = [];

let fruits = ["Apple", "Orange", "Plum"];

//Os elementos da matriz são numerados, começando com zero
//Podemos obter um elemento por seu número entre colchetes

let fruitss = ["casa", "carro", "moto"];

alert( fruitss[0] ); 
alert( fruitss[1] ); 
alert( fruitss[2] ); 

//A contagem total dos elementos no array é "length"

let fruit = ["Apple", "Orange", "Plum"];

alert( fruit.length )

//Uma matriz, assim como um objeto, pode terminar com uma vírgula

let frui = [
    "Apple",
    "Orange",
    "Plum",
  ];

  /*
  Métodos pop/push, shift/unshift

  pushacrescenta um elemento ao final.

shift pegue um elemento desde o início, avançando na fila, de forma que o 2º elemento passe a ser o 1º.

pushadiciona um elemento ao final.

poppega um elemento do final.



push(...items)acrescenta itemsao final.
pop()remove o elemento do final e o retorna.
shift()remove o elemento do início e o retorna.
unshift(...items)acrescenta itemsao início.
*/

let fruits1 = ["Banana"]

let arr1 = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear - 2 items now