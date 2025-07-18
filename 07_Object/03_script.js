let obj = {
    age:12,
    wt:68,
    ht:100
}

console.log(obj);

obj.color="white";

console.log(obj);

// copy
let obj_copy = obj;

obj_copy.wt=111;

console.log(obj);
console.log(obj_copy);

// clone

// m1 : using sprade operator
let obj_clone = {...obj};

obj_clone.age=90;

console.log(obj);
console.log(obj_clone);

// m2 : using assign method
let obj_clone1 = Object.assign({},obj);

obj_clone1.ht=90;

console.log(obj);
console.log(obj_clone1);

// m3 : using loop over object
let obj_clone2={};

for(let key in obj){
    let newKey = key;
    let newValue = obj[key];
    // insert new key and value in dest and create a clone
    obj_clone2[newKey]=newValue;
}

console.log(obj);
console.log(obj_clone2);