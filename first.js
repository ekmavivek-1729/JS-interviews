var x=1;
a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}

// // //Hoisting

var x;
console.log(x);    // Note - Variable initializations are not hoisted, only variable declarations are hoisted.
x=4;

// interview output1
for(var i=0;i<5;i++){}
console.log(i);

// // interview output2

var x=3;
var y="3";
console.log(x-y);

// // interview output3

const a=5;
if(a==5){
    const a=20;
    console.log(a);
}
console.log(a);

// // interview output4
(function(){
    var a=b=c=10;
})();
console.log(b);

// // interview output5

if(""==0)
{
    console.log("yes");
}

// // interview output6

let P=[{n1:"vivek",dob:35},{n1:"vivek",dob:35},{n1:"vivek",dob:35}];
// create a function which takes input as name and return its dob
function m(P){
    return this;

}
console.log(m(P.n1));

// // interview output 7
const a=[[1,2,3],[4],5];
const p=[].concat(...a);
//const p=a.flat()
console.log(p);


// // interview output 8
function sum(a){
    return function(b){
      return a+b;
    }
  }
 
console.log(sum(2)(3));

// // interview output 9

var x=10;
var y="5";
var z1=y+12*1+x;
console.log(z1);

function awesomeFunction()
{
    var a = 2; 
var multiplyBy2 = function()
{ 
      console.log(a*2); //4
} 
}
console.log(a);