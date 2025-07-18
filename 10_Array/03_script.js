// Array of primitive

const arr1=[1,2,3,4,5];
// arr_name.indexOf(element,starting_index_of_search)
console.log(arr1.indexOf(1));     // return index ow -1 / return first_occurance
// arr_name.lastindexOf(element,starting_index_of_search)
console.log(arr1.lastIndexOf(1)); // return last_occurance
// arr_name.includes(element)
console.log(arr1.includes(1));    // return bool value

// find
// arr_name.find(fnx_call); --> return first array element that pass a test case
// function fnx_call(value,index,array) { return <> }
let first = arr1.find(myFunction);

function myFunction(value, index, array) {
  return value > 3;
}

// findindex
// arr_name.findIndex(fnx_call); --> return first array element that pass a test case
// function fnx_call(value,index,array) { return <> }
let second = arr1.find(myFunction);

function myFunction(value, index, array) {
  return value > 3;
}

// find last
// arr_name.findLast(fnx_call); --> return last array element that pass a test case
// function fnx_call(value,index,array) { return <> }
let third = arr1.find(myFunction);

function myFunction(value, index, array) {
  return value > 3;
}

// find last index
// arr_name.findLast(fnx_call); --> return last array index that pass a test case
// function fnx_call(value,index,array) { return <> }
let forth = arr1.find(myFunction);

function myFunction(value, index, array) {
  return value > 3;
}


// Array of reference

let arr2=[
    {no:1, name:"ash"},
    {no:2, name:"abs"}
]
 
console.log(arr2);
console.log(arr2.indexOf({no:1, name:"ash"}));  // not working on ref 
console.log(arr2.includes({no:1, name:"ash"})); // not working on ref 

// Use Callback function : 
// It is a function passed into another function as 
// an argument, which is then invoked inside the outer
// function to complete some kind of action

// chaining is possible 

// find
// Syntex
// array_name.find( callback function / predicate function)
let a=arr2.find(function(course){
 return course.name=="ash";
})
console.log(a);

// map (Modification)
// create a new array by performing function on each array element
let ans1=arr1.map((number,index,array) =>{
    return number*number;
})
console.log(ans1);
// console.log(typeof(ans1));

arr1.map((number,index) =>{
    console.log(index + " " + number);
    // console.log(index);
})

// filter (T/F)
// create a new array with array elements that pass a test 
let ans3=arr1.filter(
    (number)=>{
        // if(number%2==0){
        //     return true;
        // }
        // else {
        //     return false;
        // }
        return (number%2==0);
    }
)
console.log(ans3);

// reduce (left to right)
// arr_name.reduce((fnx),acc_value)
// arr = [1, 2, 3, 4]
// acc=0 curr=1 // assigned
// acc=1 curr=2 // not assigned
// it runs a function on each array element to produce a single value
let ans4=arr1.reduce((acc,curr,index,array)=>{
    // sum is stored in acc
    return acc+curr;
},0);
console.log(ans4);

// reduceRight (right to left)
// it runs a function on each array element to produce a single value
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}

// More
// https://www.w3schools.com/js/js_array_iteration.asp


