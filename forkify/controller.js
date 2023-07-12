// import icons from 'url:./img/icons.svg'
// console.log(icons);
// import { loadRecipe, state } from './model.js'
import * as model from './model.js';
import recipeView from './recipeView.js'

const recipeContainer = document.querySelector('.recipe-container');
const searchResult = document.querySelector('.section-search-results');

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
        recipeView.renderSpinner(recipeContainer);

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


const showSerachResult = async function (recipeName) {
    try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipeName}`);
        const data = await res.json();
        console.log(res, data);

        if (!res.ok) throw new Error(`${data.error} (${res.status})`);

        let recipeList = data.recipes?.length > 10 ? data.recipes?.slice(0, 10) : data.recipes
        console.log(recipeList, recipeList.length);


        if (!res.ok) throw new Error(`${data.error} (${res.status})`);
        let html = `${recipeList.map(recipe => {
            return ` <button class="btn--recipes " id="${recipe.recipe_id}"><div class="recipee flex" >
                    <div class="recipe-img flex">

                        <img src="${recipe.image_url}" alt="">
                    </div>
                    <span class="flex-row pt-10 recipe-dec">
                        <span class="heading--3">${recipe.title?.length >= 30 ? recipe.title.slice(0, 30) + '...' : recipe.title}</span>
                        <span>${recipe.publisher}</span>
                    </span>
                </div>  </button>`}).join('')}       
        
        `
        html += `<div>
                    <span><a href="#">Page 1</a></span>
                    <span class="float-rt"><a href="#">Page 2</a></span>
                </div>`
        searchResult.innerHTML = '';
        recipeContainer.innerHTML = '';
        searchResult.insertAdjacentHTML('afterbegin', html);

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
        // let recipe = data.recipe;
        // console.log(recipe);
        // recipe = {
        //     id: recipe.recipe_id,
        //     title: recipe.title,
        //     image: recipe.image_url,
        //     publisher: recipe.publisher,
        // }
        // console.log(recipe);
    } catch (err) {
        alert(err)
    }
}

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