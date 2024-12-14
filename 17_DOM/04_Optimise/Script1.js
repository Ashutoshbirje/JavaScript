// syn code --> exe line by line
// function sync(){
//     console.log("first");
// }
// sync();
// console.log('Second');

// asyn code --> exe when call stack is empty
// setTimeout(function(){
//     console.log('third');
// },3000);
// function sync(){
//     console.log("first");
// }
// sync();
// console.log('Second');

// Promise
let mypromise = new Promise(function(resolve,reject){
    // console.log('I am promise');
    // resolve(100);
    
    setTimeout(function(){
    console.log('I am promise');
    },3000);
    resolve(100);
})
console.log("first");
