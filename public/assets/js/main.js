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
// Fetch API
function fetchCoctails(searchValue){
    fetch(`${urlSearch}${searchValue}`)
        .then(response => response.json())
        .then(data =>{
            listCocktailsData = data.drinks.map((drink) =>({
                name: drink.strDrink,
                id: drink.idDrink,
                picture: drink.strDrinkThumb,
            }))
            renderListCocktails(listCocktailsData);
        })
}

// Render lista cócteles
function renderListCocktails(listCocktailsData){
    let html = '';
    for (const eachDrink of listCocktailsData){
        let htmlClass= '';
        let img = 'https://via.placeholder.com/140x130';
        if(eachDrink.picture != ''){
            img = eachDrink.picture;
        }
        const favorite = listFavCocktailsData.find((favorite) => favorite.id === eachDrink.id);
        if (favorite) {
            htmlClass = 'selected';
        }
        html += `<div><span><li class="js_selection ${htmlClass}" id=${eachDrink.id}>
        <h3 class="name">${eachDrink.name}</h3>
        <img src="${img}" alt="Imagen del cóctel" class="img">
        </li></span></div>`;
    }
    listCocktails.innerHTML = html;
    addEventToCoctel();
}

// Render lista favoritos
function renderFavListCocktails(listCocktailsData){
    let html = '';
    let img = 'https://via.placeholder.com/140x130';
    for (const eachDrink of listCocktailsData) {
        if(eachDrink.picture != ''){
            img = eachDrink.picture;
        }
        html += `<div><span class="close"><i class="fa-regular fa-circle-xmark close_btn js_cross js_selection" id=${eachDrink.id} title="Quitar de favoritos"></i>
        <li id=${eachDrink.id}>
        <h3 class="name">${eachDrink.name}</h3>
        <img src="${img}" alt="Imagen del cóctel" class="img">
        </li></span></div>`;
    }
    listFavCocktails.innerHTML = html;
    addEventToCoctel();
}

// Evento añadir/eliminar favoritos
function handleClick(ev){
    const idSelected = ev.currentTarget.id;
    const favCocktails = listCocktailsData.find(eachDrink => eachDrink.id === idSelected);
    const indexCocktail = listFavCocktailsData.findIndex(eachDrink => eachDrink.id === idSelected);

    document.getElementById(idSelected).classList.toggle('selected');

    if(indexCocktail === -1){
        listFavCocktailsData.push(favCocktails);
    }else{
        listFavCocktailsData.splice(indexCocktail,1);
    }
    renderFavListCocktails(listFavCocktailsData);
    localStorage.setItem("myfavs", JSON.stringify(listFavCocktailsData));
}

// Añade evento a li
function addEventToCoctel(){
    const selectedItems  = document.querySelectorAll('.js_selection');
    for (const eachItem of selectedItems) {
        eachItem.addEventListener('click', handleClick);
    }
}

// Búsqueda de otros cócteles
function handleClickBtn(ev){
    ev.preventDefault();
    const searchValue = inputValue.value;
    fetchCoctails(searchValue);
}
// Renderiza la lista de fav con los datos del LS
if (cocktailStore){
    listFavCocktailsData = cocktailStore;
    renderFavListCocktails(listFavCocktailsData);
}

fetchCoctails("martini");

searchBtn.addEventListener('click', handleClickBtn);
function reset(ev){
    ev.preventDefault();
    inputValue.value = '';
    localStorage.removeItem("myfavs");
    listFavCocktailsData =[];
    renderFavListCocktails(listFavCocktailsData);
    fetchCoctails("martini");
}
resetBtn.addEventListener('click', reset);
//# sourceMappingURL=main.js.map
