//  

// // Method 1
// async function getAllproduct(){
//     try{
//      // fetch returns promise 
//       const response = await fetch('https://api.sampleapis.com/beers/ale')
//     //   console.log(response);
//       const data = await response.json();
//       console.log(data);
//     } catch (error){
//       console.log(error)
//     }
// }

// getAllproduct()

// // Method 2
fetch('https://api.sampleapis.com/beers/ale').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})