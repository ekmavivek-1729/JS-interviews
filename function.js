// function statement  or function declaration

function a(){
    console.log("a is called");
}
a();


// // Function expression

var b=function(){
    console.log("b is called");
}
b();

// // First class function

var p=function(){
    //console.log(p1);
    return function(){};
}
//p(function(){});
console.log(p());


// In this question if you down the curly brackets down the return then it give you undefind
function bar2(){
	return{
              bar2 : "Xyz"
       }
	
  }
function bar1(){
	return 
     { 
         bar1 : "Abc"
    }
		
	
  }
  bar2();
   bar1();
  
console.log(bar1());

console.log(bar2());