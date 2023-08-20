"use strict";

// khai báo các trường thông tin
const usernameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");

// khai báo nút login
const btnLogin = document.getElementById("btn-submit");

// lấy ra danh sách người dùng trong localStorage
// const userArr = JSON.parse(getUser('userArr')) ?? [];

// kiểm tra thông tin nhập vào theo yêu cầu
const validate = function () {
  const username = usernameInput.value;
  const password = passwordInput.value;
  // kiểm tra đã nhập đầy đủ thông tin
  if (!username || !password) {
    alert(`Vui lòng nhập đầy đủ tên người dùng và mật khẩu`);
    return false;
  }
  return true;
};

// tạo sự kiện diễn ra sau khi nhấn nút đăng nhập
btnLogin.addEventListener("click", function () {
  // kiểm tra thỏa mãn yêu cầu
  if (validate()) {
    // lấy ra người dùng có theo tên đăng nhập
    const user = userArr.find((e) => e.username === usernameInput.value);
    // kiểm tra mật khẩu đã nhập đúng chưa
    if (user?.password === passwordInput.value) {
      saveToStorage("currentUser", user);
      window.location.href = "../index.html";
    } else {
      alert(`Tên người dùng hoặc mật khẩu không đúng`);
    }
  }
});
