'use strict';

function reset(ev){
    ev.preventDefault();
    inputValue.value = '';
    localStorage.removeItem("myfavs");
    listFavCocktailsData =[];//lleva fav a vacío
    renderFavListCocktails(listFavCocktailsData);//hace render de fav vacio
    fetchCoctails("martini");
}
resetBtn.addEventListener('click', reset);

