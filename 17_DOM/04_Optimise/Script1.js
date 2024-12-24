// // syn code --> exe line by line
// function sync(){
//     console.log("first");
// }
// sync();
// console.log('Second');

// // asyn code --> exe when call stack is empty
// setTimeout(function(){
//     console.log('third');
// },3000);
// function sync(){
//     console.log("first");
// }
// sync();
// console.log('Second');

// // Promise
// let mypromise = new Promise(function(resolve,reject){
//     // syn code
//     // console.log('I am promise');
//     // resolve(100);
//     // reject(new Error("404"));

//     // Asyn code
//     setTimeout(function(){
//     console.log('I am promise');
//     },3000);
//     resolve(100);
// })
// console.log("first");

// // Promise
// let mypromise2 = new Promise(function(resolve,reject){
//    let success = false;
//    if(success){
//     resolve("Promise completed");
//    } else {
//     reject("Promise rejected");
//    }
// })

// mypromise2.then((message)=>{
//     console.log(message);
// })

// mypromise2.catch((error)=>{
//     console.log(error);
// })

// mypromise2.finally(()=>{
//     console.log("Always Run");
// })

let mypromise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "ok");
});

let mypromise4 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "ok");
});

let mypromise5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "ok");
});

// resolve when all promise resolve successfully
Promise.all([mypromise3,mypromise4,mypromise5]).then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.log(error);
});