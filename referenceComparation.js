const y = { z: 1 };
const a = { y: y };
y.a = a;

// const b = a;
// const b = {...a};
// const b = Object.assign({}, a);
// const b = JSON.parse(JSON.stringify(a));
const b = structuredClone(a);
b.y.z = 2;
console.log(a);

// let x = 1;
// let y = x;

// y = 2;

// console.log(x);
