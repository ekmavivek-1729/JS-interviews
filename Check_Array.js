// How to detect the given things are array or not 


// we have two method to get the given things are array

// isArray method...

let a=[];
console.log(Array.isArray(a));  // if its give true then it is an array

console.log(Array.isArray({}));   // false

// instance of array

console.log([] instanceof Array);  // is also give the result in true or false



// Remove duplicate from array

let arr=[1,2,4,3,5,6,2,5,4,9,2,5,7,2,3];

let newArr=[...new Set(arr)];
console.log(newArr);