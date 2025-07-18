// VAR keyword

// global scope
// var s = "ashu";
// if(true){
//     console.log(s);
// }

// // function scope
// function call(){
//     var age=23;
//     console.log(s);
//     console.log(age); 
// }
// call();
// // console.log(age); // ERROR

// no block scope
console.log(a); 
{
    var a=10;
    console.log(a);
    // console.log(s);
}
console.log(a); 

// // reassign meai error nahi ayega (debug issue)
// var x=10;
// var x=20;

// // update kar sakte heai
// x=30
// console.log(x);
