//objeto vazio  ex: let pessoa = {...};

let pessoa = {
  nome: "duda",
  idade: 27,
  altura: 1.75,
  telefone: 1100000000,
  estudante: true,
};

console.log(pessoa)

//copia de obj 

//OBS--Quando uma variável de objeto é copiada, a referência é copiada, mas o próprio objeto não é duplicado


let dados = pessoa;

console.log(dados)

//se eu troca a variavel é alterado nos 2 obj

