function click() {

    var t1 = document.querySelector("#tx");

    var result = document.querySelector("#resultado");

    let pais = "brasil";

    t1.innerHTML = `${result.value}`;
    
    if (pais == "brasil") {
      console.log("brasileiro");
    } else {
      console.log("estrangeiro");
      t1.innerHTML = `ok`;
    }
  }