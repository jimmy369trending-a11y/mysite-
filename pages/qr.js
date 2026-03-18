// Generate QR code (placeholder, add API later)
function generateQR() {
  const text = document.getElementById("qrText").value;
  const status = document.getElementById("status");
  const qrResult = document.getElementById("qrResult");
  const qrImage = document.getElementById("qrImage");

  if (!text) {
    status.innerText = "❌ Please enter text or URL";
    return;
  }

  status.innerText = "⏳ Generating QR code...";

  // Placeholder logic
  // Later replace this with API call using your key
  const placeholderURL = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(text);
  
  qrImage.src = placeholderURL;
  qrResult.classList.remove("hidden");
  status.innerText = "✅ QR Code generated!";

  // Optional: auto scroll to QR code
  qrResult.scrollIntoView({ behavior: "smooth" });
}

// Download QR code
function downloadQR() {
  const qrImage = document.getElementById("qrImage");
  const a = document.createElement("a");
  a.href = qrImage.src;
  a.download = "qr-code.png";
  a.click();
}
