const score = 100; // Number 
console.log(typeof score)
console.log(score);

const balance = new Number(100); // Object 
console.log(typeof balance)
console.log(balance);

// Enter above two lines of code in brawser consloe and observe its prototype

const value = balance.toString();
console.log(typeof value)
console.log(value)

console.log(balance.toFixed(2))

const num1 = 23.23
console.log(num1.toPrecision(3));

const num2 = 100000000
console.log(num2.toLocaleString('en-IN'))