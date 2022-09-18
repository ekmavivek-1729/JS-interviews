// // clousures

function x(){
       var a=7;
       function y(){
              console.log(a);
       }
       return y;
}
var z=x();
z();

//IIFE(Imediatily invoke function expression)

(function()
{
       var a=6;
       console.log(a);
}
)();
console.log(a);

// callback

function x(sum){
       console.log(sum);
}

function y(a,b,p){
       let m=a+b;
       p(m);
}
y(5,8,x);

// // promise 

const mypromises=new Promise(resolve,reject=>{
       setTimeout(()=>{
              resolve("hii this is promise");
       },5000)
})

mypromises.then(val=>console.log(val));


// //input
var empData = [{name:'one', salary:20},
{name:'two', salary:30},
{name:'three', salary:40}]

// //output
var newEmpData = [{name:'one', salary:40},
{name:'two', salary:60},
{name:'three', salary:80}]

// // update the double salary

const p=empData.map(value=>{
       return {name:value.name, salary:value.salary*2};
})
console.log(p);

//  //remove the value which name is two

const q=empData.filter(value=>{
       return value.name!="two"
})
console.log(q);


//Higher order function

function add(a,b){
       return a+b;
}
function Ho(a, newf){
       return newf(a,20);
}
Ho(30,add);