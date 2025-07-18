// console.log("let's start");

// object create 
// let rectangle = { 
//     // Property
//     length: 1,
//     breath: 3,

//     // Method
//     draw: function(){
//         console.log('draw');
//     }
// }

// call property 1) rectangle.length 2) rectangle[length]
// call method   1) rectangle.drow --> (print entire function)  2) rectangle.drow() --> (print entire functionallity)

// M1
// // Factory function (cteate an object and returns value )
// function createRectangle(a,b){
//     return rectangle = {
//         // Property
//         length: a,
//         breath: b,
    
//         // Method
//         draw: function(){
//             console.log('draw');
//         },
//         draw1(){
//             console.log('draw');
//         }
//     }
// }

// // it gives object as return value
// let a=createRectangle(3,4);
// console.log(a);
// console.log(typeof(a));

// M2
// Constructor function (Pascal Notation --> first later of every word is capital)
// it is a fux which initilizes to property and methods
// this : refers to current object
// new  : keyword gives an empty object

// gfather ( inbuild code )
let Rectangle1= new Function(
    'length',
    'breath',
    `    
    this.length = length;
    this.breath = breath;
    this.draw = function(){
        console.log("drawing");
    }
    `
)

// # rect & Rectangle are similar

// father
let rect = new Rectangle1(2,4);
console.log(rect);

// father
function Rectangle(a,b){
    this.length = a;
    this.breath = b;
    this.draw = function(){
        console.log("drawing");
    }
}

// child
// Object creation using constructor function
let b=new Rectangle(4,5);
console.log(b);

// object's parent constructor
console.log(b.constructor);
// parent's parent constructor
console.log(Rectangle.constructor);


// add
b?.color="red"; // handle undefine value
console.log(b);
// delete
delete b.length;
console.log(b);

for(let key in rect){
    console.log(key,rect[key]);
}


// shallow cpy 

// Deep cpy