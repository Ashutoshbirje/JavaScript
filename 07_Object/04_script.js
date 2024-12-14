console.log("let's start");

// object create 
let rectangle = {
    // Property
    length: 1,
    breath: 3,

    // Method
    draw: function(){
        console.log('draw');
    }
}

// call property 1) rectangle.length 2) rectangle[length]
// call method   1) rectangle.drow   2) rectangle.drow() 

// Factory function (cteate an object and returns value )
function createRectangle(a,b){
    return rectangle = {
        // Property
        length: a,
        breath: b,
    
        // Method
        draw: function(){
            console.log('draw');
        }
    }
}

let a=createRectangle(3,4);
console.log(a);

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

let rect = new Rectangle1(2,4);
console.log(rect);

// (rect == Rectangle)

// father
function Rectangle(a,b){
    this.length = a;
    this.breath = b;
    this.draw = function(){
        console.log("drawing");
    }
}

// child
let b=new Rectangle(4,5);
console.log(b);

// object's parent constructor
console.log(Rectangle.constructor);
console.log(b.constructor);

// add
b.color="red";
console.log(b);
// delete
delete b.length;
console.log(b);

for(let key in rect){
    console.log(key,rect[key]);
}

