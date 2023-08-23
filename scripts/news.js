"use strict";
const newsContainer = document.getElementById("news-container");
const pageNum = document.getElementById("page-num");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
let totalResults;
// Hàm render news
const renderNews = function (data) {
  // Làm trắng news container
  newsContainer.innerHTML = "";
  // Check số trang hiện tại
  checkBtnNext();
  checkBtnPrev();
  // Loop data để render từng news card
  data.forEach((card) => {
    const html = `
        <div class="card flex-row flex-wrap">
            <div class="card mb-3" style="">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${
                          card.urlToImage
                            ? card.urlToImage
                            : "../img/no-pic.png"
                        }"
                            class="card-img"
                            alt="${card.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text">${card.description}</p>
                            <a href="${card.url}"
                                class="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    // Thêm card vào trong newsContainer
    newsContainer.insertAdjacentHTML("afterbegin", html);
  });
};
// Hàm check số trang
const checkBtnPrev = () =>
  // Nếu số trang là 1 thì không hiển thị nút Prev
  +pageNum.textContent === 1
    ? (btnPrev.style.display = "none")
    : (btnPrev.style.display = "block");

const checkBtnNext = () =>
  // Nếu số trang là trang cuối thì không hiển thị nút Next
  +pageNum.textContent === Math.trunc(totalResults / pageSize)
    ? (btnNext.style.display = "none")
    : (btnNext.style.display = "block");

// Hàm lấy dữ liệu từ server
const getNewsData = async function (country, currentPage) {
  try {
    newsContainer.innerHTML = "";
    // Fetch dữ liệu server
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${
        currentUser ? currentUser.category : "business"
      }&pageSize=${
        currentUser ? currentUser.pageSize : 10
      }&page=${currentPage}&apiKey=b505a213cfef4608a0750eb699375524`
    );

    const data = await res.json();
    // Nếu không nhận được dữ liệu thì báo lỗi
    if (data.status === "error") throw new Error(data.message);
    // console.log(data);
    // Lưu tổng số lượng article có thể nhận được vào totalResult
    totalResults = data.totalResults;
    // Render dữ liệu
    renderNews(data.articles);
  } catch (err) {
    // Báo lỗi nếu bắt đưuọc lỗi
    console.error(`Error : ${err.message}`);
  }
};
// Gọi hàm getNewsData
getNewsData("us", "business", 1);

////////////////////////////////////////////////////////////////
//Event handler

// Next button
btnNext.addEventListener("click", () => {
  getNewsData("us", ++pageNum.textContent);
});

// Previous button
btnPrev.addEventListener("click", () => {
  getNewsData("us", --pageNum.textContent);
});
