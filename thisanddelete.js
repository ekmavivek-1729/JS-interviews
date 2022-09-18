//use of this keyword

const obj={
       n1:"Vivek",
       n2:"kumar",
       dob:25,
       fn: function(){
              return this;
       },
       
};
console.log(obj.fn());


// use of delete operator

const obj1={
       n1:"v",
       n2:"k"
};
console.log(obj1.n1);  //before using delete operator
delete obj1.n1;
console.log(obj1.n1);  // after using delete operator