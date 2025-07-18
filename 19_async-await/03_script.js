// Promise creation & data passing

const promiseOne = new Promise((resolve,reject)=>{
  // async code 
  setTimeout(() => {
    let data = {username: "ashutosh", passward: "passward"}
    resolve(data)
  }, 1000);
})

promiseOne.then((user)=>{
  console.log(user)
  console.log('Promise executed successfully');
})