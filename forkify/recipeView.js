import View from './view.js'


class RecipeView extends View {
    _parentElement = document.querySelector('.recipe-container');
    _errorMessage = 'We could not find that recipe. Please try anather one!';
    _message = '';

    _generateMarkup() {
        return ` <div class="recipe-head " >  <img src="${this._data.imageUrl}" alt="recipe_image">
                        <h3 class="heading--1"><span>${(this._data.title).toUpperCase()}</span></h3>
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
                           
                            ${this._data.ingredients.map((ing, i) => {
            this.ingredients(ing)
        }).join(' ')}      
                        </div>
                           <div>
                    <h3 class="heading--2"><span>HOW TO COOK IT</span></h3>
                    <p>This recipe was carefully designed and tested by <strong> ${this._data.publisher}</strong>. Please check out directions at
                        their website.</p>

                    <button class="nav__btn btn button flex btn-download-recipe">
                        <a
                            href="${this._data.sourceUrl}"><span>DOWNLOAD</span></a>
                        <svg class="nav__icon fill-white">
                            <use href="img/icons.svg#icon-arrow-right"></use>
                        </svg>
                    </button>
                </div>
                    </div>`;

    }
    ingredients(ing) {

        return `<div class="ingredient flex" >
                                    <svg class="nav__icon">
                                        <use href="img/icons.svg#icon-check"></use>
                                    </svg>
                                    <span class="ingredient-dec">${ing}</span>
                                </div>`
    }
}

export default new RecipeView(); //
