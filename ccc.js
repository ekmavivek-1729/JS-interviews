// var a = 1;
// function b() {
//  a = 10;
//  return;
//  function a() {}
// }
// b();
// console.log(a);

// for(var i = 0; i < 10; i++) {
//        setTimeout(function() {
//        console.log(i);
//        }, 10);
//       }
      
// var myObject = {
//        price: 20.99,
//        get_price : function() {
//        return this.price;
//        }
//       };
//       var customObject = Object.create(myObject);
//       console.log(customObject.price);
//       customObject.price = 19.99;
//       console.log(customObject.price);
//       delete customObject.price;
//       console.log(customObject.get_price());
      

// var obj={
//        company:'xyz'
// }
// var new_obj=Object.create(obj);
// console.log(new_obj.company);
// delete new_obj.company
// console.log(new_obj.company);

// var Employee = {

//        company: 'CB Emp'
       
//        }
       
//        var employee1 = Object.create (Employee);
       
//        delete employee1.company;
       
//        console.log(employee1.company);

// let s='Hiii'
// console.log(typeof(s));

// let s1=[1,2,3,4,5,2,3,4,5,1,3]

// let obj={};

// for(let i=0;i<s1.length;i++){
//        let char=s1[i];
//        // if(obj[char]){
//        //        obj[char]+=1;
//        // }
//        // obj[char]=1;
//        obj[char]=obj[char]?obj[char]+=1:obj[char]=1;
// }
// console.log(obj);

// console.log(1+5+"");

// var s="helllo";
// console.log(s.split(''));

// function fab(n){
//        if(n==1)
//        return 0;
//        if(n==2)
//        return 1;
//        return fab(n-1)+fab(n-2);
// }
// console.log(fab(5));


// let cat = {
//        name : 'Bertie',
//        breed : 'Cymric',
//        color : 'white',
//        greeting: function() {
//          console.log('Meow!');
//        }
//      }
 
//      // Add your code here
 
//      cat['name']='catName';
//      cat['catName']='name';
//      cat.greeting();
//      console.log(cat);

// function Person(name, age) {
//        this.name = name;
//        this.age = age;
//      }
//      console.log(Person.prototype.constructor)

// const myAwesomeArray = [1, 2, 3, 4, 5]
// console.log(myAwesomeArray.forEach(x => x * x))
// console.log(myAwesomeArray.map(x => x * x))