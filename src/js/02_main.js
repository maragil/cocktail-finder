if (cocktailStore){
    listFavCocktailsData = cocktailStore;
renderFavListCocktails(listFavCocktailsData);
}

fetchCoctails("martini");

searchBtn.addEventListener('click', handleClickBtn);

