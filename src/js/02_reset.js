'use strict';

function reset(ev){
    ev.preventDefault();
    listFavCocktails.innerHTML = '';
    inputValue.value = '';
    localStorage.removeItem("myfavs");
}
resetBtn.addEventListener('click', reset);