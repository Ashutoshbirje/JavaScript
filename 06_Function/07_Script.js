function greetUser(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greetUser("Ashutosh", sayBye);
