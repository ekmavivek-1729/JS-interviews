// Weakset

// const arrWs=new WeakSet([1,2,34]);
// console.log(arrWs);     /// It thorws an error

let obj1 = {message:"Hello world"};
const newSet3 = new WeakSet([obj1]);
console.log(newSet3.has(obj1));   // true


//WeakMap

let obj = {name:"Vivek"};
const map3 = new WeakMap();
map3.set(obj, {age:23});
console.log(obj);