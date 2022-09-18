// const obj1={
//     first: "Vivek",
//     last: "Kumar",
//     DOB: "feb",
//     friends: ['panku', 'bhamshu'],
//     fn1: function(){
//         return this.first + " "+ this.last;

//     }


// };
// console.log(obj1.fn1());

// console.log(obj1);
// console.log(obj1.first);
// obj1.first="vv";
// console.log(obj1);

// Constructor function for Person objects

function Person(first,last,dob,age,city){
    this.firstName=first;
    this.lastName=last;
    this.dateOb=dob;
    this.age1=age;
    this.cityP=city;


}
const myID=new Person("Vivek","tiwari","feb 26","25","saran");
console.log(myID.cityP);

// If you create an object constructor , you cannot create a new property to an existing object constructor.
// if you want to add then go to constructor and add it not from outside.
// in JS prototype property also allows you to add new methods to objects constructors.