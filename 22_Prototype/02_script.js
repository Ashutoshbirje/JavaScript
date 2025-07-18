function Setusername(username){
    this.username = username
}

function createuser(username,email,password){
    Setusername.call(this, username)
    this.email = email
    this.password = password
}

const data = new createuser("ashu","a@gamil.com","123")
console.log(data)