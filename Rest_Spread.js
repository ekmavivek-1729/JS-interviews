const arr=[1,2,3,4,5];
//! ES5
// const head1=arr[0];
// const tail1=arr.slice(1);

//ES6
const [head1,...xs]=arr;
console.log(head1,xs);

const name='vivek';
const [f,...l]=name;
console.log(f,l);

const obj={name:'vv', last:'kk',dob:'feb'};
const{last,...rest}=obj; //... (rest) they are only called when they are on the LHS side
console.log(last);// 
console.log(rest); //name,dob

const{...obj2}=obj; //shallow copy
console.log(obj2);

// if ... is on the RHS side then it is called Spread operator
// example of spread operator
const narr=[50,60,...arr,'vivek'];
console.log(narr);
//copy to array using spread
const brr=[0,9,7];
const prr=[...arr,...brr];
console.log(prr);

// both spread and rest : remember RHS side evaluated first

const [h,...t]=[...arr,'last ele'];
console.log(h);
console.log(t);