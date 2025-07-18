// Promise creation 

const promiseOne = new Promise((resolve,reject)=>{
  // async code 
  // DB calls / cryptograpgy / network call 
  setTimeout(() => {
    console.log('Async task is completed')
    resolve();
  }, 1000);
})

// resolve part
promiseOne.then(()=>{
  console.log('Promise executed successfully');
})

// reject part
promiseOne.catch(()=>{
  console.log('Promise executed unsuccessfully');
})