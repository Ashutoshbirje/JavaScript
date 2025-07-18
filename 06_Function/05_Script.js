// Global Scope

const { use } = require("react");

{
  // block Scope
  let a = 1;
  var b = 2;
  const c = 3;
}

// console.log(a); // Error
console.log(b);
// console.log(c); // Error

// Closure

// Ex 1

function one(){

  const name = "ashu"

  function two(){
    const data = "text"
    console.log(name)
  }
  // console.log(data); // Error 

  two();
}

one();

// Ex 2

if(true){
  const username = "ashu"
  if(username == "ashu"){
    const data = "test"
    console.log(username + data)
  }
  // console.log(data); // ERROR
}
// console.log(username); // ERROR 