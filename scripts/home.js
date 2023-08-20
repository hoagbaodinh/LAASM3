"use strict";
const loginModal = document.getElementById("login-modal");
const welcomeMessage = document.getElementById("welcome-message");

// khai báo nút logout
const btnLogout = document.getElementById("btn-logout");

// kiểm tra thông tin đăng nhập
if (currentUser) {
  // ẩn giao diện khi chưa đăng nhập
  loginModal.style.display = "none";

  // hiển thị giao diện sau khi đăng nhập thành công
  welcomeMessage.textContent = `Welcome ${currentUser.firstName}`;
}

btnLogout.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  loginModal.style.display = "";
  welcomeMessage.textContent = "";
  window.location.href = "../pages/login.html";
});
