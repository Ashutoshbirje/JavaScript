let arr=[1,2,3,4,5];

let len=arr.length;

const map = new Map();
map.set(1,"1")
map.set(2,"2")
map.set(3,"3")
map.set(1,"1")

const obj = {
    fname: "ashutosh",
    lname: "Birje"
}

// for
// for(let index=0;index<len;index++){
//     console.log("Number: ",arr[index]," Index: ",index);
// }

// for-each
// arr.forEach((value,index,arr)=>{
//     console.log("Number: ",value," Index: ",index);
// })

// for -off
// for(let value of arr){
//     console.log(value);
// }

// for(let value of "ashutosh"){
//     console.log(value);
// }

// for(const [key,value] of map){
//     console.log(`Key: ${key} Value: ${value}`)
// }

// Object are not intertable // ERROR
// for(const key of obj){
//     console.log(`Key: ${key.fname} Value: ${value.lname}`)
// }

// For -in
// for (const {key, value} in map) {
//     console.log(`Key: ${key} Value: ${value}`)
// }

// for(const key in obj){
//     console.log(`Key: ${key} Value: ${obj[key]}`)
// }

// for(const key in arr){
//     console.log(`Key: ${key} Value: ${arr[key]}`)
// }

// // // pass array to function
// // function getsum(arr){
// //     let sum=0;
// //     for(let index=0;index<len;index++){
// //         sum+=arr[index];
// //     }
// //     return sum;
// // }
// // console.log(getsum(arr));
 