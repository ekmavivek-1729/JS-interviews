// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// Best Example of closure given just below

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x();
// //console.log(z);
// z();


// Interview Questions
// what is the output of given  program

// function p(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Hii Vivek");
// }
// p();

// output of this program is: 
// Hii Vivek
// 6
// 6
// 6
// 6
// 6
 // But we want 1 2 3 4 5 and why the output is printed because of JS because in JavaScript it didn't wait so its make a copy of function 
 //and the i in the every copy of function refering to the same spot in memory
 // Now JS is quickly see that the loop execute very fast as compare to timeout limit and i becomes 6 and the output value is 6 every time .
 // all things happen because of var because of global scope if you use let instead of var it gives you right answer,
 // because let is block scope and its created new copy every time.

 //Now for correct code
 //change var to let it work fine

//  function p(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Hii Vivek");
// }
// p();


// Best use of closures is data hiding, I will give you example of both without closure and with the clouser

// without closure
 
// var c=0;
// function incr(){
//     c++;
//     console.log(c);
// }
// incr();       // here you see that anyone can acess the value of c in this example.


// with closure

// function cm(){
//     var c=0;
//     function incr(){
//         c++;
//         console.log(c);
//     }
//     return incr;
// }
// var c1=cm();
// c1();               // Here you see that you don't have aceess the direct variables(c) so it because of closure. 
// cm();

// function x(){
//     var a=5;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x();
// z();

function v1(a){
    function v2(b){
        // console.log(a+b);
        return a+b;
    }
    return v2;

}
// let s1=

console.log(v1(2)(3));
// s1(3);