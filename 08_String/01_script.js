// IMP
// string declaration
// double quated string
let a="ashu";
console.log(a);
// single quated string
let b='ashu';
console.log(b);
// Template string
let c=`q 
w`;
console.log(c);
let d="ashu asas";
console.log(d);
let e="asahjsdls s \"ajshasajsk\" djsdhshdj";
console.log(e); 

// Using string object (Declare below 2 line in brawser console and observe propeties)
// store string in key value pair
let nav=new String("name");
console.log(nav);

// string length
let s0="aslaks";
console.log(s0.length);

// string concatination
let s1="slsl";
let s2="ddd";
let s3=s1+s2;
console.log(s3);

console.log(s1.concat(" ",s2));

// New version (String interpolation)
let s4=`ass`;
let s5=`sdds`;
let s6=`${s4}${s5}`;
console.log(s6);
 
// find char at index
console.log(s5.charAt(0)); // allow -ve (size-ve : meaning)(if not exist the return empty string)
console.log(s5.at(1)); // not allow -ve
console.log(s5[2]); // (if not exist the return undefined)
console.log(s4.indexOf('a'));

// UTF-16 code value (0 to 65535)
console.log(s5.charCodeAt(0));

// L to U
let s7="ashu";
s7=s7.toUpperCase();
console.log(s7);

// U to L
let s8="ASHU";
s8=s8.toLowerCase();
console.log(s8);

// extract a part of a string
// substring(start, end)
let s9="ashutosh";
let s10=s9.substring(1);
console.log(s10);
let s11=s9.substring(2,4); // 4 exclude
console.log(s11);
console.log(s9.includes('ash'));


// substr(start,length)
let s12=s9.substr(1,2);
console.log(s12);
let s13=s9.substr(1,2); // no negative value
console.log(s13);

// slice(start,end)
let s14=s9.slice(3,4); // 4 exclude
let s141=s9.slice(-3,4); // reverse
console.log(s14);

// trim - white space
let s15="   assajd    ";
console.log(s15.trim());
console.log(s15.trimStart());
console.log(s15.trimEnd());

// padding
let s16="5";
console.log(s16.padStart(4,"#"));
console.log(s16.padEnd(4,"#"));

// repeat
console.log(s16.repeat(4));

// replace
console.log(s16.replace("5","4"));
// / /i
// / /g
console.log(s16.replaceAll("5","4"));

// other
let s17="ashu askjsj ssakaj ajsk";
let s18=s17.split(' ');
console.log(s18);

let s19=s17.join(' ');
console.log(s19);

// Escape character (\)
// \b \f \n \r \t \v
 