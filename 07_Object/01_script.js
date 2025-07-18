//////////////////// CREATE ////////////////////

// create with obj Literal // Non-singlton 
let obj={
    // obj property
    // property:value;
    name:"ashu",
    // "name":"ashu",
    // "nick name":"ashu",
    [a]:"key1", // symbol declaration 
    collage : "544",
    age:12,

    // obj method
    greet:function(){
        console.log("The End");
    },

    fullname:function(){
        return this.name+" "+this.age;
    },

    fulldata(){
        return this.name+" "+this.age;
    }
}

// create with NEW keyword // singlton 
let obj2=new Object();

// create with Object constructors
function cons(a,b,c){
    this.name=a;
    this.age=b;
    this.ht=c;
    this.wt=46;
    this.fulldata=function(){
        return this.name + " " + this.age;
    }
}
let obj3=new cons("as",34,45);

// we are allow to add new method and property to obj not for constructor

//////////////////// ADD ////////////////////
// Add property
obj.grade="a";

//////////////////// REMOVE ////////////////////
// remove property
delete obj.name;

// data type
console.log(typeof(obj));

// //////////////////// DISPLAY ////////////////////
// print
console.log(obj);

// by name
// ??
// document.getElementById("ID").innerHTML=obj.age+obj.collage;

// for -in
for(let key in obj){
    console.log(key," ",obj[key]);
}

// make it simple to use in the loop
for(let [obj ,value] of Object.entries(obj)){
    console.log(obj+" "+value);
}

// store in array
const arr1 = Object.keys(obj);
console.log(arr1);

// store in array
const arr2=Object.values(obj);
console.log(arr2);

// store in string
let string=JSON.stringify(obj);
console.log(string);

// Check for if the property is exists 
console.log(obj.hasOwnProperty('name'))
console.log(obj.hasOwnProperty('fname'))

// //////////////////// CALL ////////////////////
// call obj method
obj.greet();

// call property
console.log(obj.age);
console.log(obj["age"]);

// //////////////////// LOCK ////////////////////
Object.freeze(obj) // after this line no any statement update object property 



