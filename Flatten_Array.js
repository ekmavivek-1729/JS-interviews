// 1. Using Array flat method

// const arr=[1, [2, [3], 4, [5, 6, [7]]]];
// const brr=arr.flat(Infinity);
// console.log(brr);

// Question: Given a deeply nested array, create a function on the array, namely flatten, that when invoked returns
//  a flat version of the original array. Function should be defined in a way that it can be invoked on existing
// and future arrays. 

// Input

// var input = [
//        1, 2, 3,
//        [4],
//        [5, 6, [7], [8, [9, [10]]]],
//        11, 12, 13,
//        [14, [[[[[15, [16]]]]]]],
//        17, 18,
//        [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
//    ];


//output:-  var flatArray = input.flatten();

    // flatArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

// solution

// function flatten(){

//        const output=[];

//        function process(arr){
//               for(let i=0;i<arr.length;i++){
//                      let curr_Ele=arr[i];
//                      if(Array.isArray(curr_Ele)){
//                             process(curr_Ele);
//                      }else{
//                             output.push(curr_Ele);
//                      }
//               }
//        }

//        process(this);
//        return output;

// }

//// Below method is simple function for flatten the array

// const flatten=(input)=>{
//        let output=[];

//        if(!Array.isArray(input)){
//               return input;
//        }

//        for(let data of input){
//              output=output.concat(flatten(data));
//        }
//        return output;

// }



var input = [
       1, 2, 3,
       [4],
       [5, 6, [7], [8, [9, [10]]]],
       11, 12, 13,
       [14, [[[[[15, [16]]]]]]],
       17, 18,
       [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
   ];

//    console.log(flatten(input));
   
   // The JavaScript array prototype constructor is used to allow to add new methods and properties to the Array() object.


//    Array.prototype.flatten = flatten;
//    console.log(input.flatten());