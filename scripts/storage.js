// 'use strict'

// // hàm lưu dữ liệu người dùng vào localStorage
// const saveUser = function(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
// };

// // hàm lấy ra dữ liệu người dùng trong localStorage
// const getUser = function(key) {
//     return localStorage.getItem(key);
// };

// // tạo danh sách người dùng mẫu

// // const userArr = [
// //     {
// //         firstName: 'David',
// //         lastName: 'Darwin',
// //         username: 'DavidDarwin',
// //         password: 'david12345',
// //         passworsConfirm: 'david12345',
// //     },
// //     {
// //         firstName: 'Sean',
// //         lastName: 'Bean',
// //         username: 'SeanBean',
// //         password: 'seanbean123',
// //         passworsConfirm: 'seanbean123',
// //     },
// //     {
// //         firstName: 'Smith',
// //         lastName: 'Alice',
// //         username: 'SmithAlice',
// //         password: 'alice1234',
// //         passworsConfirm: 'alice1234',
// //     },
// //     {
// //         firstName: 'Jackson',
// //         lastName: 'Emily',
// //         username: 'EmilyJackson',
// //         password: 'emilyjackson',
// //         passworsConfirm: 'emilyjackson',
// //     },
// //     {
// //         firstName: 'Powers',
// //         lastName: 'Robert',
// //         username: 'RobertPowers',
// //         password: 'robert1234',
// //         passworsConfirm: 'robert1234',
// //     },
// // ]

// // hàm lấy dữ liệu task trong localStorage
// const getTask = function(key) {
//     return localStorage.getItem(key);
// };

// // hàm lưu dữ liệu task vào localStorage
// const saveTask = function(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
// };

"use strict";

//Hàm Lưu dữ liệu dưới LocalStorage
const getFromStorage = function (key) {
  return JSON.parse(localStorage.getItem(key));
};

const saveToStorage = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

// Default value
let category = "business";
let pageSize = 10;

const user1 = new User("abc", "Pham", "abc1", "1234");
const user2 = new User("ab", "Pham", "abc2", "1234");
const user3 = new User("cd", "Pham", "abc3", "1234");

const task1 = new Task("Test", "abc1");
const task2 = new Task("Test2", "abc1");
const task3 = new Task("Test3", "abc1");

// Lưu dữ liệu vào localStorage
!getFromStorage("userArr") && saveToStorage("userArr", [user1, user2, user3]);
!getFromStorage("todoArr") && saveToStorage("todoArr", [task1, task2, task3]);

//Lấy dữ liệu
const userArr = getFromStorage("userArr");
const todoArr = getFromStorage("todoArr");
const currentUser = getFromStorage("currentUser");
