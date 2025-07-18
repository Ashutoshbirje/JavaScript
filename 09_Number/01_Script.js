// JS contain only one type of number
// JS number are always stored as double precision floating point number 
// 64 bit floating point
// value (0-51) Exponent(52-62) Sign(63)

let x=3;
console.log(typeof(x));
let y=3.14;
console.log(typeof(y));

// Large and small number representation
let a=123e5;
console.log(a);
let b=123e-5;
console.log(b);

let z=NaN;
console.log(typeof(z));
console.log(isNaN(x));
console.log(isNaN(z));

let c=Infinity;
console.log(typeof(c));

// JS bigInt
// JS integers are only accurate up to 15 digits
// typeof(bigint) is also bigint

// creation of big int
let p = 1234567890123456789012345n;
let q = BigInt(1234567890123456789012345)

// Object: Number
// property
// MAX_SAFE_INTEGER / MIN_SAFE_INTEGER
// method
// isInteger() / isSafeInteger() 

// JS Number Methods
// https://www.w3schools.com/js/js_number_methods.asp

// JS Number Properties
// https://www.w3schools.com/js/js_number_properties.asp