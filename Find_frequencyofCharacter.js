let s1="hloramaa"

let obj={};

for(let i=0;i<s1.length;i++){

       let char=s1[i];
       obj[char]=obj[char]?obj[char]+=1:obj[char]=1;
}
console.log(obj);