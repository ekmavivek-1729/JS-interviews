let a="this is india"
let b="he is is is ram "

// output: this india he ram

// let new_word=a.split(' ').concat(b.split(' '));
let w1=a.split(' ');


let w2=b.split(' ');

let obj={};

for(let i=0;i<w1.length;i++){
       let char=w1[i];
       obj[char]?obj[char]+=1:obj[char]=1;

}

for(let i=0;i<w2.length;i++){
       let char=w2[i];
       obj[char]?obj[char]-=1:obj[char]=-1;

}

for(let key in obj){
       let p=Math.abs(obj[key]);
       if(p>=1){
              for(let i=0;i<p;i++){
                     console.log(key);
              }
       }
}



// let s1="hloram"

// let obj={};

// for(let i=0;i<s1.length;i++){
//        let char=s1[i];
//        if(obj[char]){
//               obj[char]+=1;
//        }
//        obj[char]=1;
//        // obj[char]=obj[char]?obj[char]+=1:obj[char]=1;
// }
// console.log(obj);


