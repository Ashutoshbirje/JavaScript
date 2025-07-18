const user = {
    username: "ashutosh",
    price: 100,
    message: function(){
        console.log(`${this.username} how are you ?`);
        // console.log(this) --> user = {---}
    }
}

// user.message()
// user.username = "akash"
// user.message()
// console.log(this) // --> {}

//////////////////////////////////////////////////////////

// function call(){
//     console.log(this) 
// }
// call()

//////////////////////////////////////////////////////////

// const data = () => {
//     console.log(this) // --> {}
// }

// data()

//////////////////////////////////////////////////////////

// const data = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(data(1,2))

//////////////////////////////////////////////////////////

// const data = (num1,num2) => num1 + num2;

// console.log(data(1,2))

//////////////////////////////////////////////////////////

// const data = (num1,num2) => (num1 + num2);

// console.log(data(1,2))
