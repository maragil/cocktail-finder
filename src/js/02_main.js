// Renderiza la lista de fav con los datos del LS
if (cocktailStore){
    listFavCocktailsData = cocktailStore;
    renderFavListCocktails(listFavCocktailsData);
}

fetchCoctails("martini");

searchBtn.addEventListener('click', handleClickBtn);