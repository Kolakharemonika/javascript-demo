// import icons from 'url:./img/icons.svg'
// console.log(icons);

import * as model from './model.js';
import recipeView from './recipeView.js'
import searchView from './searchView.js'
import view from './view.js'

const serachRecipeName = document.getElementById('search-input');
const btnSearch = document.querySelector('.btn__search');
const welcomeMsg = document.querySelector('.recipe-message')

const showRecipe = async function (recipeId) {
    try {

        //method to make constant hash
        // console.log(window.location.hash, 'window.location.hash');
        // const id = window.location.hash.slice(1); //remove #
        //  https://forkify-api.herokuapp.com/api/v2/recipes/#256f26 change this        
        // const res = await fetch(` https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);


        //loading recipe
        recipeView.renderSpinner();

        await model.loadRecipe(recipeId); //receiving promise , return nothing

        welcomeMsg.innerHTML = '';

        //render data 
        recipeView.render(model.state.recipe);


    } catch (err) {
        alert(err)
    }
}
// showRecipe('28924');
// https://forkify-api.herokuapp.com/api/search?q=pizza


const showSerachResult = async function () {
    try {

        //get serach Input here
        let recipeName = searchView.getQuery();
        if (!recipeName) return;

        searchView.renderSpinner();

        //load search result
        await model.loadSearchResults(recipeName); //receiving promise , return nothing

        //showing data with page
        searchView.render(model.getSearchResultsPage());


        //initial pagination btns
        searchView.renderPagination(model.state.search)

        const btnRecipe = document.querySelectorAll('.btn--recipes');
        console.log('this is');

        btnRecipe.forEach(btn => {

            btn.addEventListener('click', function () {
                console.log('clicked', btn.getAttribute('id'));
                showRecipe(`${btn.getAttribute('id')}`);

                btnRecipe.forEach(btn => {
                    btn.classList.remove('active');
                });
                btn.classList.add('active');

            })
        })

    } catch (err) {
        console.error(err);
    }
}

//Dom conection
const controlPagination = function (goToPage) {
    console.log(goToPage);

    //showing data of new page
    searchView.render(model.getSearchResultsPage(goToPage));


    //Render new pagination btns
    searchView.renderPagination(model.state.search)
}

const init = function () {
    searchView.addHandlerClick(controlPagination);

}
init();



btnSearch.addEventListener('click', function (e) {

    if (!serachRecipeName.value) return;
    showSerachResult(serachRecipeName.value);

});

serachRecipeName.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && serachRecipeName.value) {
        showSerachResult(serachRecipeName.value);
    }
})
// Call the addEventListener method
// ["click", "enter"].forEach((event) => {
//     btn.addEventListener(event, increase)
// })
// searchResult.addEventListener('click', function (e) {
//     // console.log(this);
// })

// const bubble = document.querySelector(".bubble");
// const inputRangeValue = document.querySelector("#points");

// bubble.textContent = inputRangeValue.value;

// const newVal = Number(((inputRangeValue.value - 0) * 100) / (100 - 0));
// bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;

// inputRangeValue.addEventListener("input", (event) => {
//     bubble.textContent = event.target.value;

//     const min = 0;
//     const max = 100;
//     const newVal = Number(((event.target.value - min) * 100) / (max - min));
//     bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
// });


//hash related code
// window.addEventListener('hashchange', showRecipe('28924'));
// window.addEventListener('load', showRecipe('28924'));


//more than one event
// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe('28924')))