// hoisting
// It is the process of shifting all function definition (void) and 
// variable declaration (var) to the top of the scope

// fnx hoisting for VOID function
// call();
// function call(){
//     console.log("hoisting");
// }
// call(); 

// fnx hoisting for normal function
// v();
// var v=function call(){
//     console.log("Not hoisting");
//     return 1;
// }
// v(); 
 
// not fnx hoisting for expression function
// v(); // error
// var v=function (){
//     console.log("Not hoisting");
//     return 1;
// }
// v(); 

// not fnx hoisting for arrow function
// v(); // error
// var v=()=>{
//     console.log("Not hoisting");
//     return  1;
// }
// v(); 

// Class hoisting also not possible