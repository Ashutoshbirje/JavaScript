console.log("1" + 2); // 12 
console.log(1 + "2"); // 12 
console.log("1" + 2 + 2 ); // 122 
console.log(1+2+"2"); // 32

console.log(null > 0);  // null --> 0 --> false 
console.log(null == 0); // true 
console.log(null >= 0); // null --> 0 --> false 

let val1;
val1 = 5 ?? 10  // if first value is null / undefined then assign second value 
console.log(val1)

let val2;
val2 = null ?? 10  // if first value is null / undefined  then assign second value 
console.log(val2)

