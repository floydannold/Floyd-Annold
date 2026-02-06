// Smooth fade-in on page load
document.addEventListener("DOMContentLoaded", () => {
document.body.style.opacity = 0;
document.body.style.transition = "opacity 1s ease";
setTimeout(() => {
document.body.style.opacity = 1;
}, 100);
});


// Contact form validation with animation feedback
function validateForm() {
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();


if (!name || !email) {
   alert("Please fill in all fields before submitting.");
return false;
}


alert("Thank you! Your message has been sent successfully.");
return true;
} 