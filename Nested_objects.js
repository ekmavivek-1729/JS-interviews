

// const new_obj=Object.assign({},obj,obj1);
// console.log(new_obj);

function merge(current, updates) {
       for (key of Object.keys(updates)) {
         if (!current.hasOwnProperty(key) || typeof updates[key] !== 'object')
          current[key] = updates[key];
         else
          merge(current[key], updates[key]);
       }
       return current;
}
const obj={
       a:{b:1}
}
const obj1={
       a:{c:2}
}

console.log(merge(obj,obj1));