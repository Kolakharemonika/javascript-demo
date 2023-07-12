class SearchView {
    #parentEl = document.querySelector('.section-search-results');
    #recipeList;


    getQuery() {
        const recipeName = document.getElementById('search-input').value;
        this.#clearInput();
        return recipeName;
    }

    #clearInput() {
        document.getElementById('search-input').value = '';
    }

    render(data) {
        this.#recipeList = data;
        console.log(this.#recipeList);

        const markup = this.#generateMarkup();
        this.#clear();
        this.#parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    #clear() {
        this.#parentEl.innerHTML = '';
    }

    #generateMarkup() {
        console.log(this.#recipeList);
        let html = `${this.#recipeList.map(recipe => {
            return ` <button class="btn--recipes " id="${recipe.id}"><div class="recipee flex" >
                    <div class="recipe-img flex">

                        <img src="${recipe.imageUrl}" alt="">
                    </div>
                    <span class="flex-row pt-10 recipe-dec">
                        <span class="heading--3">${recipe.title?.length >= 30 ? (recipe.title.slice(0, 30)).toUpperCase() + '...' : (recipe.title).toUpperCase()}</span>
                        <span>${recipe.publisher}</span>
                    </span>
                </div>  </button>`}).join('')
            }       

        `
        html += `< div >
                    <span><a href="#">Page 1</a></span>
                    <span class="float-rt"><a href="#">Page 2</a></span>
                </div > `;

        return html;
    }
}
export default new SearchView(); //