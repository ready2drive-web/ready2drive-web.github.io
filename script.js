
const btn = document.getElementById('button');
const form = document.getElementById('form');


const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const sended = document.getElementById('sended');

const phoneError = document.getElementById('phoneError');
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    nameError.style.display = "block";
    valid = false;
  } else nameError.style.display = "none";

  // Email
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    emailError.style.display = "block";
    valid = false;
  } else emailError.style.display = "none";

  // Message
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    messageError.style.display = "block";
    valid = false;
  } else messageError.style.display = "none";

  if (!valid) return;

  btn.textContent = "Sending...";

  emailjs.sendForm(
    "service_3baqern",
    "template_ija9fnd",
    this
  )
  .then(() => {
    btn.textContent = "Submit Your Inquiry";
    form.reset();
  })
  .catch(err => {
    btn.textContent = "Submit Your Inquiry";
    console.error(err);
  });
});
// Live error removal
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener("input", () => {
    input.style.borderColor = "";
    if (input.id === "name") nameError.style.display = "none";
    if (input.id === "email") emailError.style.display = "none";
    if (input.id === "message") messageError.style.display = "none";
  });
});

// script.js for program.html









function toggleMenu() {
    document.querySelector('.toolbox').classList.toggle('active');
}




  function selectPackage(packageInfo) {
    const message = document.getElementById("message");

    message.value =
      "Hello, I am interested in the following package:\n\n" +
      packageInfo;

    message.scrollIntoView({ behavior: "smooth" });
    message.focus();
    }