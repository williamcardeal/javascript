function parInpar(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
let res = parInpar(5);
console.log(res);
