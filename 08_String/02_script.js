// search
let s1="Please locate where 'locate' occurs!";
console.log(s1.indexOf("locate",0));//first occurance OW -1
console.log(s1.lastIndexOf("locate",0));//last occurance OW -1
console.log(s1.search("locate"));
console.log(s1.match("locate"));// returns array containing str char
// / /g
// / /gi
console.log(s1.matchAll("locate"));// returns array containing str char
// / /g
// / /gi
console.log(s1.includes("locate",4));// returns BOOL 
console.log(s1.startsWith("Please"));// returns BOOL 
console.log(s1.endsWith("!G"));// returns BOOL 
