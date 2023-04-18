//Existem 7 tipos primitivos : string, number, e .bigintbooleansymbolnullundefined

let john = {
    name: "John",
    sayHi: function() {
      alert("Hi buddy!");
    }
  };
  
  console.log(john.sayHi()); // Hi buddy!

//métodos úteis, como toUpperCase()

  let str = "Hello";

alert( str.toUpperCase() ); // HELLO

//número tem métodos próprios, por exemplo, toFixed(n)

let n = 1.23456;

alert( n.toFixed(2) ); // 1.23