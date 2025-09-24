document.getElementById("welcomeBtn").addEventListener("click", function () {
  alert("Hello, welcome to my page!");
});

const profilePic = document.getElementById("profile-pic");

profilePic.addEventListener("mouseenter", () => {
  document.body.style.backgroundColor = "#e0ffe0";
});

profilePic.addEventListener("mouseleave", () => {
  document.body.style.backgroundColor = "#f0f4f8";
});
