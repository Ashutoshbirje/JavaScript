
let x=5;

try{
    console.log("Try block starts here");
    // refrence error
    console.log(y);
    console.log("Try block ends here");
    // custom error
    // if(x==2){
    //     throw(error);
    // }
}

catch(error){
//    console.log("Error occurr " , error);
//    console.log("I am inside the catch block");
   throw new Error("Declare kar variable");
}

finally{
    console.log("It will run every time")
 }