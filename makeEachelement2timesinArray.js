const arr=[1,2,3,4];
let len=arr.length;
var a=[];
for(let i=0;i<len;i++){
       a.push(arr[i]);
       a.push(arr[i]);
}
console.log(a);


// create duplicate array

const a1=[1,2,3,4,5];
// const a2=[];
// const a2=[...a1];
// console.log(a1);
const a2=a1.slice();
console.log(a2);