function User(username,logincount,isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;
    return this
}

const userOne = User("A",12,true);
console.log(userOne)

// Overwrite 
const usertwo = User("B",13,false);
console.log(userOne)

// Avoid with new keyword 
const userThree = new User("C",23,true);
console.log(userThree)