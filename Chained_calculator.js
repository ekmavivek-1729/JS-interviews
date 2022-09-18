// Create a function calculator that should take one initial value.
//   * Chain calculations like add, subtract on it.
//   * Return the calculated value on invocation of val function at the end of the chain.
//   * 
//     var result = cal(2)
//             .add(5)
//             .sub(4)
//             .val()
//     console.log("Result is : " , result)

// Output : 3 (2 + 5 - 4)

function cal(initialValue){

       // create accumulator- store result

       let accumulator=initialValue;
       var calobj={
              add,
              sub,
              val
       }

       // define add, sub, val function

       function add(num){
              accumulator+=num;
              return calobj;
       }

       function sub(num){
              accumulator-=num;
              return calobj;
       }

       function val(){
              return accumulator;
       }

       // 3. Return an object with add, sub and val functions. - chain
       return calobj;

}

var result = cal(2)
 .add(5)
 .sub(4)
 .val()

 console.log("After cal call" , global.add)  //undefind

console.log("Result is : " , result)   // 3
  
