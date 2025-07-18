// async - await

const promiseOne = new Promise((resolve,reject)=>{
  // async code 
  setTimeout(() => {
   let err = true;
   let data = {username: "ashutosh", passward: "passward"};
   if(!err){
     resolve(data)
   } else {
     reject('ERROR: Something went wrong')
   }
  }, 1000);
})

async function consumepromiseOne(){
    try {
     const response = await promiseOne
     console.log(response);
    } catch (error){
     console.log(error)
    }
}

consumepromiseOne();