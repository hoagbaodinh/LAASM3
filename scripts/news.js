'use strict'
const newsContainer = document.getElementById('news-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const API_KEY = '';

let totalNews,
    pageSize = 5,
    page = 1,
    category;

const currentUser = JSON.parse(getUser('currentUser'));