let arr=[1,2,3,4,5];

let len=arr.length;

// for-each
arr.forEach((value,index)=>{
    console.log("Number: ",value," Index: ",index);
})

// for
for(let index=0;index<len;index++){
    console.log("Number: ",arr[index]," Index: ",index);
}

// for -off
for(let value of arr){
    console.log(value);
}

// // // pass array to function
// // function getsum(arr){
// //     let sum=0;
// //     for(let index=0;index<len;index++){
// //         sum+=arr[index];
// //     }
// //     return sum;
// // }
// // console.log(getsum(arr));
