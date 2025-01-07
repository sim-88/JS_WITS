// // Object with symbols as keys
// const obj = {};
// const symbol1 = Symbol("key1");
// const symbol2 = Symbol("key2");

// obj[symbol1] = "Value 1";
// obj[symbol2] = "Value 2";

// console.log(obj[symbol1]); // Output: Value 1
// console.log(obj[symbol2]); // Output: Value 2


const symbol1=Symbol("key1")
const symbol2=Symbol.for("key1")

console.log(symbol1==symbol2)