// given object you need to create an array with only values
// example: 

// let x={
//        a:1,
//        b:2
// }

//output : p=[1,2]

// let x={
//        a:1,
//        b:2
// }
// const arr=[];
// for(let i in x){
//        arr.push(i);
// }
// // const arr=Object.entries(x);
// console.log(arr);



// Another question 
// let obj={
//        a:1,
//        b:2,
//        getA(){
//               console.log(this.a);
//               return this;
//        },
//        getB(){
//               console.log(this.a);

//        }

// }
// console.log(obj.getA().getB());


// when we write [1,2].print()  output: 1,2  write a function to print the value

// Array.prototype.print=()=>{
//        let ans=" ";
//       for( let [i,ele] of this){
//              if(i===this.length){
//                     ans+=ele;
//              }else{
//                     ans+=`${ele},`;
//              }
//        }
//        console.log(ans);

// }

// [1,2].print();


// const obj={
//        a:{
//               b:{
//                      c:2
//               }
//        }
// };
// console.log(obj.a.b.c);

// const clone=JSON.parse(JSON.stringify(obj));
// console.log(clone.a.b.c);


/// Write a function that return sum of the element // add(1,2) or add(1)(2) and so on...

// function add(a,b){
//        if(a && b ){
//               return a+b;
//        }else{
//               return function(c){
//                      return a+c;
//               }
//        }
// }

// console.log(add(1,2));


// find the mising number from unsorted array

// function mising(arr){
//        const arr1=arr.sort((a,b)=>a-b);
//        let n=arr.length;
//        // let total_sum=n*(n+1)/2;
//        let new_sum=(n+1)*(n+2)/2;

//        for(let i=0;i<n;i++){
//               new_sum-=arr1[i];
//        }

//        return new_sum;

// }

// const arr=[5,2,4,6,1];
// console.log(mising(arr));



// Reverse the string

// let str='Hii Vivek ji';

// let rst=str.split("").reverse().join("");
// console.log(rst);


// write a function to return a mximum number and minimum number from an array after removing one element at a time.
// arr=[1,2,3,4,5] , output=[14,10]

// function mm(arr){
//        // if array is unsorted then sort the array first
//        let new_arr=[];
//        const arr1=arr.sort((a,b)=>a-b);
//        // console.log(arr1);
//        const p=arr1.shift();
//        const max=arr1.reduce((a,b)=>a+b);
//        new_arr.unshift(max);
//        arr1.unshift(p)

//        const arr2=arr.sort((a,b)=>a-b);
//        console.log(arr2);
//        arr2.pop();
//        const min=arr2.reduce((a,b)=>a+b);
//        new_arr.push(min);

//        return new_arr;
// }

// const arr=[5,3,2,4,1];
// console.log(mm(arr));




/// Find the length of integer without converting it to a string
// example: let x=1234  output: 4

// function Find_length(num){
//        let len=0;
//        do {
// 		num/= 10;
// 		len++;
// 	} while (num >= 1);

//        return len;
// }

// let num=12346778999;
// console.log(Find_length(num));


/// find the output and is any way to get the name of the object without converting to regular function

// const profile={
//        name:'Vivek',
//        getName:()=>{
//               console.log(this.name);
//        }
// };
// profile.getName(); // output: Undefind but if we getName:function(){} like this then get vivek as output


/// count the maximum numbers in an array
// ex: let arr=[1,2,2,4,2,4]  output: 2 because maximum number is 4 and it is 2 times in an array

// let arr=[1,2,2,4,2,4]

// let max=Math.max(...arr);

// const brr=arr.filter((d)=>{
//        return d>=max;
// });

// console.log(brr.length);


/// what is the output 

// const arr=[5,120,15,21]

// for(let i=0;i<arr.length;i++){
//        setTimeout(()=>{
//               console.log(`Index:${i}, element:${arr[i]}`);
//        },arr[i]);
// }
// output: Index 0:5 Index2:15 Index3:21, Index1:120


/// Method chaining, what couild be the making change so that we can call easily like x.a().b()... and so on


let x={
       a(){
              return this;  // we use return this

       },
       b(){
              return this;

       }
}

x.a().b().a().a() 