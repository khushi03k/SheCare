// script.js

// Signup
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simulate saving user (in real case: send to backend)
  localStorage.setItem("user", JSON.stringify({ name, email, password }));
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser?.email === email && storedUser?.password === password) {
    alert("Login successful!");
    // Redirect to dashboard later
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials!");
  }
});
// dashboard.js

// Example: Logout click handler
document.querySelector('.sidebar ul li:last-child a').addEventListener('click', function (e) {
  e.preventDefault();
  alert('You have been logged out!');
  // In real app: redirect to login page
  window.location.href = "login.html";
});

// Example: Dynamic next cycle prediction
document.addEventListener("DOMContentLoaded", () => {
  const nextCycleCard = document.querySelector(".card:nth-child(1) p");
  const today = new Date();
  const nextCycleDate = new Date();
  nextCycleDate.setDate(today.getDate() + 5); // Add 5 days

  const formattedDate = nextCycleDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  nextCycleCard.textContent = `Starts on ${formattedDate}`;
});

// Mood Log Simulation
document.addEventListener("DOMContentLoaded", () => {
  const moods = ["Happy 😊", "Tired 😴", "Energetic 💪", "Cranky 😒"];
  const moodCard = document.querySelector(".card:nth-child(2) p");

  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  moodCard.textContent = `You seemed ${randomMood} the last 3 days`;
});



