'use strict';

const listCocktails = document.querySelector('.js_list-cocktails');
const listFavCocktails = document.querySelector('.js_list-cocktails_favorites');
const searchBtn = document.querySelector('.js_btn');
const resetBtn = document.querySelector('.js_reset');
const inputValue = document.querySelector('.js_input');
const urlSearch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const cocktailStore = JSON.parse(localStorage.getItem("myfavs"));

let listCocktailsData = [];
let listFavCocktailsData = [];