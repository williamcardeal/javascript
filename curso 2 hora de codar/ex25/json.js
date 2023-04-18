function primeiraFuncao (){
return new Promise (( resolve) =>{
    setTimeout (()=> {
    console.log("ola")
    resolve()
    },3000)
})



}

async function segundaFuncao(){
    console.log("entou")
   await primeiraFuncao()
    console.log("saiu")
  

}
segundaFuncao()