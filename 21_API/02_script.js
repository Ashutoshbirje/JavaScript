
// async --> async code always returns a promise
// fetch --> always return promise 

async function getdata(){
    // get request - async
    let response= await fetch('https://jsonplaceholder.typicode.com/photos')
    // parse json data - async
    let data = await response.json();
    console.log(data);
}
getdata();

// scenario
// prepare URL --> sync
// Fetch data --> network call --> async --> (await: stop exe until successful execution)
// Process data --> sync (data is must require)

// More
// https://www.youtube.com/watch?v=EL3PKEHggrE&list=PPSV