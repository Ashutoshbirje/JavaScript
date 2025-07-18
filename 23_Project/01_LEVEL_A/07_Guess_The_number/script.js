let target = 0;
let cnt = 0;

document.querySelector("#restartBtn").addEventListener("click", () => {
  target = Math.floor(Math.random() * 100) + 1;
//   console.log("Target:", target);
  cnt = 0;
  document.querySelector("#submitBtn").disabled = false;
  document.querySelector("#guessInput").disabled = false;
  document.querySelector("#feedback").innerHTML = "Your result will show here";
});

document.querySelector("#submitBtn").addEventListener("click", () => {
  let value = Number(document.querySelector("#guessInput").value);
  document.querySelector("#guessInput").value = "";
  
  if (!value) return; 

  cnt++;
  let message = "";

  if (value < target) {
    message = `${value} is smaller than target`;
  } else if (value > target) {
    message = `${value} is greater than target`;
  } else {
    message = `🎉 Wow! You guessed the number in ${cnt} tries!`;
    document.querySelector("#submitBtn").disabled = true;
    document.querySelector("#guessInput").disabled = true;
  }

  document.querySelector("#feedback").innerHTML = message;
});
