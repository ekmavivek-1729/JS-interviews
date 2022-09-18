// 

// function x(){
//        let a=8;
//        function y(){
//               console.log(a);
//        }
//        return y;
// }
// const z=x()
// z();

// const x=(a)=>(b)=>a+b;

// x(2)(3)     // curring  
// x(2,3)


// making after exam

Array.prototype.myreduce=function(callback){
       var a=0;
       for(let i=0;i<this.length;i++){
              callback(a=a+this[i]);
       }
       return a;
}

let arr=[1,2,3,4];
let ans=arr.myreduce((a,b)=>{
       a+b;
})

console.log(ans);