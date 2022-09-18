//Being able to use an Object as a key is an important Map feature.

const apples={f1:'Apples'};
const oranges={f2:'Oranges'};

const fruits=new Map();   // creating map
fruits.set(apples,1000);
fruits.set(apples,1000);
console.log(fruits.get(apples));

// you also pass array to new map constructor
const apples={f1:'Apples'};
const oranges={f2:'Oranges'};

const fruits=new Map(
    [
        [apples,5000],
        [oranges,10000]
    ]
);
console.log(fruits.get(apples));

