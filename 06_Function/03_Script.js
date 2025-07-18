// argument
function sum(a,b){
    // console.log(arguments); // object
    return a+b;
}

// # about parameter passing
// --> If we pass exact para the result is ok
// --> If we pass less para the result is NaN
// --> If we pass zero para the result is NaN
// --> If we pass more para the result is ok
console.log(sum());
console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3,4));

// Dynamic function
function sum1(){
    let total=0;
    for(let value of arguments)
        total=total+value;
    return total;
}
console.log(sum1(1,2,3,4));
 
// Rest operator // array
function sum2(a,...arg){
   console.log(arg);
}
sum2(1,2,3,4,5,6);

// Default parameter 
// must be declare at the end
function sum2(a,b,c=8){
    console.log(a+b+c);
}
sum2(1,2,3);
