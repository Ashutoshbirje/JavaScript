let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Count: " + count);
  
  if (count === 5) {
    clearInterval(intervalId); // stops repeating
  }
}, 1000); // every 1 second
