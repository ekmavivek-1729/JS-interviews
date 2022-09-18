var name1={
       firstname: "vivek",
       lastName: "kumar",

}
var name2={
       firstname:"shubham",
       lastName:"kumar"
}
var name3={
       firstname:"pankaj",
       lastName:"kumar"

}
let fullName=function(state,hometown){
       console.log(this.firstname+ " "+this.lastName+" "+ state+" "+ hometown) ;
}
fullName.call(name1,"Bihar","chhapra");  // call method
fullName.apply(name2,["Up","Varanasi"]) // apply method

let printName=fullName.bind(name3, "UP", "Balia");
printName();