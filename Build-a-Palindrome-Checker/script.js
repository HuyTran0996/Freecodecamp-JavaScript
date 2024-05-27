document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  if (!input) {
    alert("Please input a value");
    return;
  }

  const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedInput = cleanedInput.split("").reverse().join("");
  const isPalindrome = cleanedInput === reversedInput;

  if (isPalindrome) {
    result.textContent = `${input} is a palindrome`;
  } else {
    result.textContent = `${input} is not a palindrome`;
  }
});
