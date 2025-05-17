document.getElementById("contactForm").addEventListener("submit", function(e) {
  const email = document.querySelector('input[name="email"]').value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(pattern)) {
    alert("Invalid email address.");
    e.preventDefault();
  }
});
