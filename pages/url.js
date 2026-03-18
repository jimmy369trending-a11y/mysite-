async function shortenURL() {
  const input = document.getElementById("urlInput").value;
  const status = document.getElementById("status");
  const resultBox = document.getElementById("resultBox");
  const shortLink = document.getElementById("shortLink");

  // Validation
  if (!input) {
    status.innerText = "❌ Please enter a URL";
    return;
  }

  status.innerText = "⏳ Shortening...";

  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
    const data = await response.json();

    if (data.ok) {
      const link = data.result.full_short_link;

      shortLink.innerText = link;
      resultBox.classList.remove("hidden");

      status.innerText = "✅ Success!";
    } else {
      status.innerText = "❌ Invalid URL";
    }

  } catch (error) {
    status.innerText = "❌ Error connecting to API";
  }
}

// Copy function
function copyLink() {
  const text = document.getElementById("shortLink").innerText;

  navigator.clipboard.writeText(text);
  alert("Copied: " + text);
}

