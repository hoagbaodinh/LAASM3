"use strict";
const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const todoList = document.getElementById("todo-list");

// lấy thông tin của người dùng đang đăng nhập
// const user = JSON.parse(getUser('currentUser'));

// const todoArr = JSON.parse(getTask('todoArr')) ?? [];
// hàm hiển thị danh sách công việc
const renderTask = function () {
  //lấy danh sách các task từ localStorage
  if (!currentUser) return;
  const taskArr = todoArr.filter((e) => e.owner === currentUser.username);
  for (let i = 0; i < taskArr.length; i++) {
    const html = `<li class="${taskArr[i].isDone === true ? "checked" : ""}">${
      taskArr[i].task
    }<span class="close">×</span></li>`;
    todoList.innerHTML += html;
  }
};

renderTask();

// tạo sự kiện sẽ diễn ra khi nhấn nút add
btnAdd.addEventListener("click", function () {
  if (!inputTask.value) {
    alert(`Hãy điền tên công việc trước khi thêm!`);
  } else {
    const task = new Task(inputTask.value, currentUser.username, false);
    todoArr.push(task);
    saveToStorage("todoArr", todoArr);
    // html = "";
    todoList.innerHTML = "";
    renderTask();
  }
});
