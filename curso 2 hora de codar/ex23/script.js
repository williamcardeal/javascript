var div1 = document.querySelector("#cor")

div1.addEventListener("mouseover", function(){

    div1.style.backgroundColor="red"
})
div1.addEventListener("mouseout", function(){

    div1.style.backgroundColor="green"
})
div1.addEventListener("mousemove", function(){

    div1.style.backgroundColor="black"
})
div1.addEventListener("click", function(){
    div1.document.write("oi");
    div1.style.backgroundColor="blue"
    

})