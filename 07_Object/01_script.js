//////////////////// CREATE ////////////////////
// create with obj Literal
let obj={
    // obj property
    // property:value;
    name:"ashu",
    // "name":"ashu",
    // "nick name":"ashu",
    collage : "544",
    age:12,

    // obj method
    greet:function(){
        console.log("The End");
    },

    fullname:function(){
        return this.name+" "+this.age;
    }
}



// create with NEW keyword
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

// for -of
// ??
// for(let [obj ,value] of Object.entries(obj)){
//     console.log(obj+" "+value);
// }

// store in array
const arr=Object.values(obj);
console.log(arr);

// store in string
let string=JSON.stringify(obj);
console.log(string);

// //////////////////// CALL ////////////////////
// call obj method
obj.greet();

// call property
console.log(obj.age);
console.log(obj["age"]);





