'use strict';

//Variables
const listCocktails = document.querySelector('.js_list-cocktails');
const listFavCocktails = document.querySelector('.js_list-cocktails_favorites');
const btnSearch = document.querySelector('.js_btn');
const resetBtn = document.querySelector('.js_reset');
const inputValue = document.querySelector('.js_input');

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini';
const urlSearch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

let listCocktailsData = [];
let listFavCocktailsData = [];