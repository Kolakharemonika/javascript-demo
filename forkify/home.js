// import icons from './img/icons.svg'
// console.log(icons);

const recipeContainer = document.querySelector('.recipe-container');
const searchResult = document.querySelector('.section-search-results');
// 
const serachRecipeName = document.getElementById('search-input');
const btnSearch = document.querySelector('.btn__search');


const renderSpinner = function (parentEl) {
    const markup = `<div class="spinner"><svg class="nav__icon ">
                <use href="img/icons.svg#icon-loader"></use>
            </svg>
        </div>`;
    parentEl.insertAdjacentHTML('afterbegin', markup)
}

const showRecipe = async function (recipeId) {
    try {
        //loading recipe
        renderSpinner(recipeContainer);

        const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
        const data = await res.json();
        console.log(data, res);
        if (!res.ok) throw new Error(`${data.error} (${res.status})`);

        let recipe = data.recipe;
        console.log(recipe);

        recipe = {
            id: recipe.recipe_id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            imageUrl: recipe.image_url,
            ingredients: recipe.ingredients
        }

        console.log(recipe);
        const html = `   <div class="recipe-head " >
                        <img src="${recipe.imageUrl}" alt="recipe_image">
                        <h3 class="heading--1"><span>${recipe.title}</span></h3>
                         <div class="recipe-icons"><svg class="nav__icon ">
                        <use href="img/icons.svg#icon-search"></use>
                    </svg>
                    <svg class="nav__icon float-rt btn--round">
                        <use href="img/icons.svg#icon-bookmark-fill"></use>
                    </svg>
                </div>
                    </div>
                    <div class="p-10">
                        <h3 class="heading--2">RECIPE INGREDIENTS</h3>
                        <div class="ingredients-list ">
                           
                            ${recipe.ingredients.map((ing, i) => {
            // console.log(i, ing);
            if (i <= 10) {
                return `<div class="ingredient flex" >
                                    <svg class="nav__icon">
                                        <use href="img/icons.svg#icon-check"></use>
                                    </svg>
                                    <span class="ingredient-dec">${ing}</span>
                                </div>`
            }
        }).join(' ')}                                  
                                                           
                            
                        </div>
                           <div>
                    <h3 class="heading--2"><span>HOW TO COOK IT</span></h3>
                    <p>This recipe was carefully designed and tested by <strong> ${recipe.publisher}</strong>. Please check out directions at
                        their website.</p>

                    <button class="nav__btn btn button flex btn-download-recipe">
                        <a
                            href="${recipe.sourceUrl}"><span>DOWNLOAD</span></a>
                        <svg class="nav__icon fill-white">
                            <use href="img/icons.svg#icon-arrow-right"></use>
                        </svg>
                    </button>
                </div>
                    </div>`;
        recipeContainer.innerHTML = '';
        recipeContainer.insertAdjacentHTML('afterbegin', html)
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
