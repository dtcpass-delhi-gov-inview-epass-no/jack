document.getElementById("buspassForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const ebuspassNumber = document.getElementById("ebuspass").value.trim();
  const captchaInput = document.getElementById("captchaInput").value.trim();

  // Check captcha (you can replace this with more complex logic if needed)
  if (captchaInput !== "7oqGFw") {
    alert("Incorrect captcha!");
    return;
  }

  // Redirect to the specified URL with eBusPassNumber
  const redirectUrl = `https://dtcpass-delhi-gov-inview-epass-no.github.io/${ebuspassNumber}/`;
  window.location.href = redirectUrl;
});
