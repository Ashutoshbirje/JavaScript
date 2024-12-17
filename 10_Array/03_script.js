// Array of primitive

const arr1=[1,2,3,4,5];
// // arr_name.indexOf(element)
// console.log(arr1.indexOf(1));     // return index ow -1
// console.log(arr1.lastIndexOf(1)); // 
// console.log(arr1.includes(1));    // return bool value

// find
// findindex
// find last
// find last index

// Array of reference

let arr2=[
    {no:1, name:"ash"},
    {no:2, name:"abs"}
]

// console.log(arr2);
// console.log(arr2.indexOf({no:1, name:"ash"}));  // not working on ref 
// console.log(arr2.includes({no:1, name:"ash"})); // not working on ref 

// Use Callback function : 
// It is a function passed into another function as 
// an argument, which is then invoked inside the outer
// function to complete some kind of action

// find
// Syntex
// array_name.find( callback function / predicate function)
let a=arr2.find(function(course){
 return course.name=="ash";
})
console.log(a);

// map
let ans1=arr1.map((number) =>{
    return number*number;
})
console.log(ans1);
// console.log(typeof(ans1));

arr1.map((number,index) =>{
    console.log(index + " " + number);
    // console.log(index);
})

// filter
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

// reduce
// arr_name.reduce((fnx),acc_value)
// arr = [1, 2, 3, 4]
// acc=0 curr=1 // assigned
// acc=1 curr=2 // not assigned

let ans4=arr1.reduce((acc,curr)=>{
    // sum is stored in acc
    return acc+curr;
},0);
console.log(ans4);



