//objeto vazio  ex: let pessoa = {...};

/* */

let pessoa = {
  nome: "duda",
  idade: 27,
  altura: 1.75,
  telefone: 11900000000,
  estudante: true,
};

delete pessoa.nome

//remover o nome

console.log(pessoa) //sem nome

delete pessoa.idade

//remover idade

console.log(pessoa) //sem idade


//Para remover uma propriedade, podemos usar o deleteoperador
//ex: delete pessoa.nome
//ex: delete pessoa.idade

//tambem podemos altera o valor ex:abaixo
pessoa.altura = 1.55


console.log(pessoa)

