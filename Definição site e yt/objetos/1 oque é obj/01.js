//objeto vazio  ex: let pessoa = {...};
// o objeto e pessoa

/**
 let = nome: "duda"
 let = idade: 27
 let = altura: 1.75
 let = telefone: 11900000000
 let = estudante: true */






let pessoa = {
  nome: "duda",
  idade: 27,
  altura: 1.75,
  telefone: 11900000000,
  estudante: true,
};



// para chamar todos os dados ex: console.log(pessoa)
// para chamar apenas um dos dados ex: console.log(pessoa.nome) e etc


function soma(a,b){
  return a + b;

}

console.log(soma(2,9))


function frase(nome){
  return `meu nome é :${nome}`
}

console.log(frase(" william ") + soma(2,5))