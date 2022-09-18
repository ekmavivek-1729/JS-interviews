// First Question

function check(){
       console.log("1"+1); //11
       console.log("A"-1); //NAN
       console.log(2+"-2"+"2"); //2-22
       console.log("Hello"-"World"+78);//NAN
       console.log("Hello"+"78"); //Hello78
}
check();

// Second Question

(function(a){
       return (function(){
              console.log(a);
              a=23;
       })()
})(45);    //output: 45


// 3rd question

(function(){
       var x=23;
       (function random(){
              x++;
              console.log(x);
              var x=21;
       })();
})();              // output NAN

// 4th question

let x={},y={name:"vivek"},z={name:"shubham"};
x[y]={name:"pankaj"};
x[z]={name:"barfa"};

console.log(x[y]);   // { name: 'barfa' }


// 5th question

var x1=3;
var y1="3";
console.log(x1-y1);  // output =0

//6th question

const a=[[1,2,3],[4],5];
const p=[].concat(...a);
//const p=a.flat()
console.log(p);         // output: [1,2,3,4,5]


// 7th question

var x2=10;
var y2="5";
var z1=y2+12*1+x2;
console.log(z1);        // output: 51210

// 8th question

function awesomeFunction()
{
    var a = 2; 
var multiplyBy2 = function()
{ 
      console.log(a*2); 
} 
}
console.log(awesomeFunction());   // output: undefinded


// 9th question

let a1=new String("abc");
let b1=new Object("abc");
if(a1==b1){
       console.log("yes");
}
else{
       console.log("NO");     //output: NO
}

// 9th
let p1=new String("abc");
let q1="abc";
if(p1==q1){
       console.log("yes");
}
else{
       console.log("NO");     //output: yes
}


// 10th question

var obj1={
       valOfThis:function(){
              return this;
       }
}
var obj2={
       valOfThis:()=>{
              return this;
       }
}

console.log(obj1.valOfThis());    // output: will return the object obj1 like this { valOfThis: [Function: valOfThis] }
console.log(obj2.valOfThis());    // output: will return window/global object like this  {}

//11th question

(function() {
       console.log(1); 
       setTimeout(function(){console.log(2)}, 1000); 
       setTimeout(function(){console.log(3)}, 0); 
       setTimeout(function(){console.log(5)}, -1); 
       console.log(4);
   })();                        // output :: 1 4 3 5 2


// 12th question

console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

//output: 0 || 1 = 1   1 || 2 =1  0 && 1 = 0    1 && 2 =2


// 13th Question

var m={},
    n={key:'n'},
    o={key:'o'};

m[n]=123;
m[o]=456;

console.log(m[n]);

// outut:456

// 14th question

console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));

//output: factorial of 10

// 15th Question

(function(x) {
       return (function(y) {
           console.log(x);
       })(2)
   })(1);             // Output:1 due to closure 


// 16th Question

var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);      // output: 10 2   -- conclusion : Hence arguments[0]() is nothing but calling fn(). Inside fn now, the scope of this function becomes the arguments array, and logging the length of arguments[] will return 2.


// 17th question

(function () {
       try {
           throw new Error();
       } catch (x) {
           var x = 1, y = 2;
           console.log(x);
       }
       console.log(x);
       console.log(y);
   })();               // 1 undefined 2   --due to Hoisting


// 18th question

var x1 = 21;
var girl = function () {
    console.log(x1);
    var x1 = 20;
};
girl ();       //output: undefined


// 19th Question

console.log(typeof typeof 1);  // output: string

// 20th question

(function(){
       var j=k=10;       // k=10 and var j=k;
})();
// console.log(j);           // j is not defind
console.log(k);

//21 Question
//  best way to find which one is an array and which one is an object

let a=[]
console.log(a.length);       // it gives some value like 0

let b={a:"23"};

console.log(b.length);     // Undefined


// How many ways can we create a duplicate of an array

const names = [ 'Jon', 'Jacob', 'Jeff' ]

const copy1 = [...names];          // shallow copy
const copy2 = Object.assign([], names);
const copy3 = JSON.parse(JSON.stringify(names)); // create deep copy
const copy4 = names.slice();


// 22th question

console.log(400.4===200.2*2);  // true
console.log(900.9===300.3*3);  // false

console.log(200.2*2);   // output: 400.4
console.log(300.3*3);   // output: 900.90000000001

// This happen because JS follow IEEE 754 standerd for math, it make use of 64 bit flotting number. This cause precision error when 
// doing floting point decimal representation.
//In shorts , normally computer work on base 2 while decimal is base 10.


// 23 th question

let myname='vivek';
let name=myname;
myname='shubham';

console.log(name);    // vivek, this will happen because pass by value

const obj1={
       id:1,
       name:"hii"
}
const obj2=obj1;
obj2.name="hlo";
console.log(obj1);  // id:1,name:'hlo' , this will happen because of pass by reference

// 24 th question

let arr=[
       
       {
              name:'vivek',
              pname:'kumar',

       },
       {
              name:'vivek',
              pname:'kumar',

       },
       


];
console.log(arr.indexOf({           // output: -1, indexOf gives -1 means the value is not found
name:'vivek',
pname:'kumar',

})
);


// 25 th question

var p="hii"

const findName=()=>{
       console.log(p);
       var p="hlo";

}
findName();      // output - undefind because of hoisting , in function block var p; console.log(p); p="hlo" 