// CONST keyword

// global scope
const s = "ashu";
if(true){
    console.log(s);
}

// function scope
function call(){
    const age=23;
    console.log(age);
}
call();
// console.log(age); // ERROR

// block scope
// console.log(a); // ERROR
{
    const a=10;
    console.log(a);
}
// console.log(a); // ERROR

// reassign meai error ayega
const x=10;
// const x=20;

// update kar nahi sakte heai
// x=30;
console.log(x);
