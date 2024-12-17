// creation of array
let arr1 = [1,2,3,4,5];
console.log(arr1);

let arr2=[
    1,
    2,
    3,
    "ashu"
];
console.log(arr2);

let arr3=[];
arr3[0]=1;
arr3[1]=2;
console.log(arr3);

let arr4= new Array(1,"ashu",true);
console.log(arr4);

console.log(typeof(arr1));

// // acess array element
let arr5= new Array(1,2,3,4,5);
console.log(arr5[0]);
console.log(arr5[1]);
console.log(arr5[2]);
console.log(arr5.at(3));
console.log(arr5.at(4));

let arr6=[1,2,3,4,5];
console.log(arr6);

// // convert array to string
console.log(arr6.toString());
console.log(arr6.join("*"));

// ??
// Array.isArray(arr1);
// (arr1 instanceof Array);

// // length of array 
let len=arr1.length;
console.log(len);

// // ADD and REMOVE
// push back
arr6.push(6);      // returns length
console.log(arr6);
// pop back
arr6.pop();        // returns element
console.log(arr6);
// pop front
arr6.shift();      // returns element
console.log(arr6);
// push front
arr6.unshift(1);   // returns length
console.log(arr6);

delete arr6[0];
console.log(arr6);

// To clear array
arr6=[];
arr6.length=0; // best
// To remove element arr_name.splice(start_index,no_of_position_to_delete)
arr6.splice(0,arr6.length);
console.log(arr6);

// // merge array
let arr7=[1,2,3,4];
let arr8=[5,6,7,8];
console.log(arr7.concat(arr8));

let combine=[...arr7,...arr8,"add more thing"];
console.log(combine);

// // copy array
let cpy_arr=[...combine];
console.log(cpy_arr);

// // flating of array
