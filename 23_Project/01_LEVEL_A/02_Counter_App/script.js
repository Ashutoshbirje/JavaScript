// Method 1

const counters = document.querySelectorAll('.counter');

const increment = () => {
    let value = parseInt(counters[0].innerText); 
    value = value + 1;
    counters[0].innerText = value;
}

const decrement = () => {
    let value = parseInt(counters[0].innerText);
    value = value - 1;
    counters[0].innerText = value;
}

console.log(counters); 

// Method 2 

// const counters = document.querySelectorAll('.counter');

// const de=document.querySelectorAll('.btn1');
// const In=document.querySelectorAll('.btn2');


// de[0].addEventListener("click", () => {
//     let value = parseInt(counters[0].innerText);
//     value = value - 1;
//     counters[0].innerText = value;
// });

// In[0].addEventListener("click", () => {
//     let value = parseInt(counters[0].innerText); 
//     value = value + 1;
//     counters[0].innerText = value;
// });

document.querySelector(".data2").addEventListener("click",()=>{
    counters[0].innerText = 0;
})