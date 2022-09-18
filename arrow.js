// without arrow function

var obj1={
       fn: function(){
              return this;
       }
}
console.log(obj1.fn());


// with arrow function

var obj2={
       fn1:()=>{
              return this;
       }
}
console.log(obj2.fn1());