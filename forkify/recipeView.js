


class RecipeView {
    #parentElement = document.querySelector('.recipe-container');
    #data;

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    #clear() {
        this.#parentElement.innerHTML = '';
    }
    renderSpinner = function () {
        const markup = `<div class="spinner"><svg class="nav__icon ">
                <use href="img/icons.svg#icon-loader"></use>
            </svg>
        </div>`;
        this.#parentElement.innerHTML = '';
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    #generateMarkup() {
        return ` <div class="recipe-head " >  <img src="${this.#data.imageUrl}" alt="recipe_image">
                        <h3 class="heading--1"><span>${this.#data.title}</span></h3>
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
                           
                            ${this.#data.ingredients.map((ing, i) => {
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
                    <p>This recipe was carefully designed and tested by <strong> ${this.#data.publisher}</strong>. Please check out directions at
                        their website.</p>

                    <button class="nav__btn btn button flex btn-download-recipe">
                        <a
                            href="${this.#data.sourceUrl}"><span>DOWNLOAD</span></a>
                        <svg class="nav__icon fill-white">
                            <use href="img/icons.svg#icon-arrow-right"></use>
                        </svg>
                    </button>
                </div>
                    </div>`;

    }
}
export default new RecipeView(); //