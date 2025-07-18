// Inheritance 

// object 

const Teacher = {
    isExpert: true
}

const Student = {
    isBetter: false 
}

const Person = {
    isknowledge: true,
    __proto__: Student
}

// class 

class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class student extends User{
    constructor(username,email,password){
        super(username)
        this.email = email 
        this.password = password
    }

    MyName(){
        console.log(`Name of student is ${this.username}`)
    }
}

const obj = new student("ashu","ashu@gmail.com","123")

obj.MyName()