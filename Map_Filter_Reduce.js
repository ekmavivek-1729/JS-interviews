//Map

let a=[1,2,3,4,5];
let a2=a.map((data)=>{
       return data*2;
})
console.log(a2);

// Filter
let f=[4,6,7,9,22,45,68];
let f1=f.filter((data)=>{
       return data%2==0;
})
console.log(f1);

//Reduce
let r=[1,2,3,4];

let r1=r.reduce((val1,val2)=>{
       return val1+val2;
})
console.log(r1);