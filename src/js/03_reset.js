function reset(ev){
    ev.preventDefault();
    inputValue.value = '';
    localStorage.removeItem("myfavs");
    listFavCocktailsData =[];
    renderFavListCocktails(listFavCocktailsData);
    fetchCoctails("martini");
}
resetBtn.addEventListener('click', reset);