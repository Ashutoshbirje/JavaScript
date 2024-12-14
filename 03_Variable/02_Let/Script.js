// LET keyword

// global scope
let s = "ashu";
if(true){
    console.log(s);
}

// function scope
function call(){
    let age=23;
    console.log(age);
}
call(); 
// console.log(age); // ERROR

// block scope
// console.log(a); // ERROR
{
    // console.log(a); // ERROR
    let a=10;
    console.log(a);
}
// console.log(a); // ERROR

// reassign meai error ayega
let x=10;
// let x=20;// ERROR

// update kar sakte heai
x=30;
console.log(x);
