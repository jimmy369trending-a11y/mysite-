// SIDEBAR
function openMenu() {
  sidebar.classList.add("active");
  overlay.classList.add("active");
}
function closeMenu() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// TOOL NAVIGATION
function openPage(page) {
  window.location.href = "pages/" + page + ".html";
}

// SETTINGS PANEL
function openSettings(type) {
  closeMenu();
  settingsPanel.classList.add("active");

  let title = "";
  let content = "";

  // GENERAL
  if(type === "general"){
    title = "⚙️ General";
    content = `
      <div class="setting-box">
        🌙 Dark Mode<br>
        <button onclick="toggleDark()">Toggle</button>
      </div>

      <div class="setting-box">
        🔔 Notifications<br>
        <button onclick="toggleNotif()">Toggle</button>
      </div>

      <div class="setting-box">
        ♻ Reset Data<br>
        <button onclick="resetData()">Reset</button>
      </div>
    `;
  }

  // APPEARANCE
  if(type === "appearance"){
    title = "🎨 Appearance";
    content = `
      <div class="setting-box">
        Theme Color<br><br>
        <input type="color" onchange="changeColor(this.value)">
      </div>

      <div class="setting-box">
        Font Size<br><br>
        <input type="range" min="12" max="22" onchange="changeFont(this.value)">
      </div>
    `;
  }

  // ACCOUNT
  if(type === "account"){
    title = "🔐 Account";

    if(localStorage.getItem("user")){
      content = `
        <div class="setting-box">
          Logged in as: ${localStorage.getItem("user")}
        </div>
        <button onclick="logout()">Logout</button>
      `;
    } else {
      content = `
        <input id="username" placeholder="Enter name"><br><br>
        <button onclick="login()">Login</button>
      `;
    }
  }

  // PREMIUM
  if(type === "premium"){
    title = "💎 Premium";
    content = `
      <div class="setting-box">
        Upgrade Coming Soon 🚀
      </div>
    `;
  }

  // ABOUT
  if(type === "about"){
    title = "ℹ️ About";
    content = `
      <div class="setting-box">
        AI Tools Hub v1.0 <br>
        Made by You 💪
      </div>
    `;
  }

  document.getElementById("settingsTitle").innerText = title;
  document.getElementById("settingsContent").innerHTML = content;
}

const settingsPanel = document.getElementById("settingsPanel");

function closeSettings(){
  settingsPanel.classList.remove("active");
}

// DARK MODE
function toggleDark(){
  document.body.classList.toggle("dark");
  localStorage.setItem("dark", document.body.classList.contains("dark"));
}

// LOAD SETTINGS
window.onload = function(){
  if(localStorage.getItem("dark") === "true"){
    document.body.classList.add("dark");
  }

  if(localStorage.getItem("color")){
    document.body.style.background = localStorage.getItem("color");
  }

  if(localStorage.getItem("font")){
    document.body.style.fontSize = localStorage.getItem("font") + "px";
  }
}

// NOTIFICATIONS
function toggleNotif(){
  let val = localStorage.getItem("notif") === "true";
  localStorage.setItem("notif", !val);
  alert("Notifications: " + (!val));
}

// COLOR
function changeColor(color){
  document.body.style.background = color;
  localStorage.setItem("color", color);
}

// FONT SIZE
function changeFont(size){
  document.body.style.fontSize = size + "px";
  localStorage.setItem("font", size);
}

// LOGIN
function login(){
  let name = document.getElementById("username").value;
  localStorage.setItem("user", name);
  openSettings("account");
}

function logout(){
  localStorage.removeItem("user");
  openSettings("account");
}

// RESET
function resetData(){
  localStorage.clear();
  location.reload();
}


