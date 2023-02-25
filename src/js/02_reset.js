'use strict';

function reset(ev){
    ev.preventDefault();
    inputValue.value = '';
    localStorage.removeItem("myfavs");
    listFavCocktailsData =[];//lleva fav a vacío
    renderFavListCocktails(listFavCocktailsData);//hace render de fav vacio
    renderListCocktails(listCocktailsData); //hace render de la lista de coctles para quitar la selección

}
resetBtn.addEventListener('click', reset);

