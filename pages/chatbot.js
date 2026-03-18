const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userMsg");

// Send message
function sendMessage() {
  const msg = userInput.value.trim();
  if(!msg) return;

  appendMessage(msg, "user");
  userInput.value = "";

  // Placeholder bot response
  setTimeout(() => {
    const reply = generateBotReply(msg);
    appendMessage(reply, "bot");
  }, 600);
}

// Append message to chat
function appendMessage(text, type) {
  const div = document.createElement("div");
  div.classList.add("message", type);
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Placeholder bot logic
function generateBotReply(msg) {
  msg = msg.toLowerCase();
  if(msg.includes("hi") || msg.includes("hello")) return "Hello 👋! How can I help you today?";
  if(msg.includes("name")) return "I am your cute AI bot 🤖";
  if(msg.includes("how are you")) return "I am doing great! Thanks for asking 😊";
  return "I am learning 🤖. API not integrated yet!";
}
