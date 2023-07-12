
import View from './view.js'

class SearchView extends View {
    _parentElement = document.querySelector('.section-search-results');
    searchinput = document.getElementById('search-input');

    getQuery() {
        const recipeName = this.searchinput.value;
        this._clearInput();
        return recipeName;
    }

    _clearInput() {
        this.searchinput.value = '';
    }


    _generateMarkup() {
        console.log(this._data);
        let html = `${this._data.map(recipe => {
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