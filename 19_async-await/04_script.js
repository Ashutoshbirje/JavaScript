// callbackHell

const promiseOne = new Promise((resolve,reject)=>{
  // async code 
  setTimeout(() => {
   let err = false;
   let data = {username: "ashutosh", passward: "passward"};
   if(!err){
     resolve(data)
   } else {
     reject('ERROR: Something went wrong')
   }
  }, 1000);
})

promiseOne
.then((user)=>{
  console.log(user)
  console.log('Promise executed successfully');
  return user.username;
})
.then((name)=>{
  console.log(name);
})
.catch((err)=>{
  console.log(err) 
}).finally(()=>{
    console.log('The promise is executed successfully executed or unsuccessfully')
})
