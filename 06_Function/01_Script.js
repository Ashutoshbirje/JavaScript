// Non-return type function

// void function
function fnx_name(){
    // function definition
    console.log("hi");
}
// function call
fnx_name();

// return type function

// normal function
function call1(a,b){
    return a+b;
    // unreachable code 
    dkjsdjss
    sdkjskjd
} 
var a=call1(2,3);
console.log(a);

// exp function
const b=function (a,b){
    return a+b;
}
console.log(b(2,4));

// arrow function
var c= (a,b) => {
    return a+b;
}
console.log(c(2,3));

// Function CallStack
// When we call any function it will create entry in stack
// When we return any function then it will remove entry from the stack

// Multiple Uses of function
// --> assign to variable
// --> pass as an argument to the function
// --> return as function in other function
// --> Stored in DSA like in array we can store function
// --> Used as property in the object