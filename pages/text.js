const textInput = document.getElementById("textInput");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

// Convert text to uppercase
function toUpperCase() {
  if (!textInput.value) return showEmptyError();
  resultText.innerText = textInput.value.toUpperCase();
  resultBox.classList.remove("hidden");
}

// Convert text to lowercase
function toLowerCase() {
  if (!textInput.value) return showEmptyError();
  resultText.innerText = textInput.value.toLowerCase();
  resultBox.classList.remove("hidden");
}

// Word count
function countWords() {
  if (!textInput.value) return showEmptyError();
  const words = textInput.value.trim().split(/\s+/).filter(Boolean);
  resultText.innerText = "Word Count: " + words.length;
  resultBox.classList.remove("hidden");
}

// Remove extra spaces
function removeSpaces() {
  if (!textInput.value) return showEmptyError();
  resultText.innerText = textInput.value.replace(/\s+/g, ' ').trim();
  resultBox.classList.remove("hidden");
}

// Clear text
function clearText() {
  textInput.value = "";
  resultText.innerText = "";
  resultBox.classList.add("hidden");
}

// Helper for empty input
function showEmptyError() {
  resultText.innerText = "❌ Please enter some text first!";
  resultBox.classList.remove("hidden");
}
