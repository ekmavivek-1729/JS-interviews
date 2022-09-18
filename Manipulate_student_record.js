   function Manipulate_student_details(obj1,operation,Key, newdata){
          if(operation==='delete'){
                 delete obj1.Key;
                
              return obj1;
       
          }
          
          else if(operation==='edit'){
                 obj1[Key]=newdata;
                 return obj1;
          }
          return obj1;


   }



const obj1={
       name:'vivek',
       lastname:'kumar',
       city:'Saran'
}

console.log(Manipulate_student_details(obj1,"edit","city","chhapra"));
console.log(Manipulate_student_details(obj1,"edit","highway","chhapra"));
console.log(Manipulate_student_details(obj1,"delete","city","chhapra"));
