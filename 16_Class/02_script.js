const user = {
    username: "ASHUTOSH",
    logincount: 0,
    signIn: true,
    getUserDetails: function(){
     console.log(`GoT USER DETAILS: ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails());