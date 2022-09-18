// Promises

const callMe=new Promise((resolve,reject)=>{
       if(true){
              resolve("Hey all Resolve");
       }else{
              reject("All rejected");
       }

})

callMe.then((result)=>{
       console.log(result);
}).catch((err)=>{
       console.log(err);
})



// Async and  await

const chilD=async ()=>{
       if(true){
              return 'Hello Vivek';
       }

}

const parent= async ()=>{
       return await chilD();
}
(async ()=>{
       const a=await parent();
       console.log(a);
})();