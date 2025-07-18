// Promise creation & shorst hand

new Promise((resolve,reject)=>{
  // async code 
  // DB calls / cryptograpgy / network call 
  setTimeout(() => {
    console.log('Async task is completed')
    resolve();
  }, 1000);
}).then(()=>{
  console.log('Promise executed successfully');
})