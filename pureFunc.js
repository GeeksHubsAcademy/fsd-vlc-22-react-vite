function sumaPura(a, b) {
  return a + b;
}

console.log(
  sumaPura(1, 2),
);


console.log = (r) => console.info(1+r);

function sumaImpura(a, b) {
  console.log(a + b);
  return a + b;
}

sumaImpura(1, 2);