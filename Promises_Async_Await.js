let fs=require("fs/promises");

//aync and await

const readThree=async(f1,f2,f3)=>{
       let a1=fs.readFile(f1,"utf-8");
       let a2=fs.readFile(f2,"utf-8");
       let a3=fs.readFile(f3,"utf-8");
       let c1=await a1;
       console.log(c1);
       let c2=await a2;
       console.log(c2);
       let c3=await a3;
       console.log(c3);

}

// promises
let a=fs.readFile("file.txt","utf-8");
a.then((data)=>{
       console.log(data);

})

console.log("Javascript doesn't wait for anyone");

readThree("file1.txt", "file2.txt","file3.txt");