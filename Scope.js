
// lexical environment and Scope chain

function a(){
    b();
    function b(){
        console.log(x);
    }
}
const x=10;
a();

// temporal dead zone for let keyword
 x=10;
 let x;
 console.log(x);