'use strict';
/*
- Listado de resultados de búsqueda: imagen + nombre
- BTN buscar conectar a la API
- Por cada cóctel del resultado hay q pintar una tarjeta con imagen + nombre
- NO imagen ---> imagen de relleno (placeholder.com)
*/
/**
 * obtener los datos (fetch y lista)
 * pintarlos en el HTML
 *
 */


//Variables
const listCocktails = document.querySelector('.js_list_cocktails'); //listado donde se va a pintar la lista de cócteles en HTML
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini';
let listCocktailsData = []; //lista de cocteles que vienen del servidor


//FETCH
fetch(url)
    .then(response => response.json())
    .then(data =>{
        listCocktailsData = data;

        renderListCocktails(listCocktailsData.drinks);//pinta los elementos en el HTML
        addEventToCoctel();//añade los eventos a los cócteles


})

//Pintar los elementos de la lista en el HTML: dentro del <ul>
//necesito un for porq dentro de cada DRINKS hay otro listado
function renderListCocktails(coctel){
    let html = '';
    for (const eachDrink of coctel) {
        html += `<li class='js_selection' id=${eachDrink.idDrink}>
        <h3>${eachDrink.strDrink}</h3>
        <img src="${eachDrink.strDrinkThumb}" alt="Imagen del cóctel" class="img">
        </li>`
    }
    listCocktails.innerHTML = html;
}

//EVENTO: al hacer click se resalta la opción elegida
//selecciona todos los <li> q tengan la clase js_selection (selección de la usuaria)

function handleClick(ev){
    console.log(ev.currentTarget.id);
    ev.currentTarget.classList.toggle('selected');//para q le añada o le quite la clase selected
}

function addEventToCoctel(){//añade los eventos a los cocteles y se ejecuta dp de q se pinten

    const selectedItems  = document.querySelectorAll('.js_selection');
    for (const eachItem of selectedItems) {
        eachItem.addEventListener('click', handleClick);
    }
}