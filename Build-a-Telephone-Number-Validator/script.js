document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("user-input").value;
  const output = document.getElementById("results-div");

  if (!input) {
    alert("Please provide a phone number");
    return;
  }

  const validNumber = validatePhoneNumber(input);
  output.textContent = validNumber
    ? `Valid US number: ${input}`
    : `Invalid US number: ${input}`;
});

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("user-input").value = "";
  document.getElementById("results-div").textContent = "";
});

function validatePhoneNumber(phone) {
  const validPatterns = [
    /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
    /^1?\s?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/,
    /^\d{10}$/,
    /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
    /^\(\d{3}\)\d{3}[-\s]?\d{4}$/,
    /^1?\(\d{3}\)\d{3}[-\s]?\d{4}$/,
  ];

  for (const pattern of validPatterns) {
    if (pattern.test(phone)) {
      return true;
    }
  }
  return false;
}
