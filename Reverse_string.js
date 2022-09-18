function Reverse_s(str){
       if(str==="")
       return " ";
       else{
              return Reverse_s(str.substr(1))+str.charAt(0);
       }

}
console.log(Reverse_s("hello vivek"));