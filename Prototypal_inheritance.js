let obj1={
       firstName:"vivek",
       latName: "kumar",
       countery:"India"
}

let obj2={
       firstName:"hii"
}

obj2.__proto__=obj1;

console.log(obj2.countery);
console.log(obj2.firstName);

