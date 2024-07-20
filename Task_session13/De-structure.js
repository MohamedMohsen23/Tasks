//Task     1
const array = [
    8,
    "5",
    2,
    "Hello World",
    {
        a: 2,
        b: 5,
    },
    false,
    {
        arr: [true, 1, NaN, new Array(2, 33)],
        test: null,
        obj: { d: "Moha", last: [2, false, undefined] },
    },
];


const [, , , , , , { arr: [, , , [, thirtyThree]] }] = array;

const [, , , , , , { obj: { d: moha } }] = array;

console.log(thirtyThree); 
console.log(moha); 










