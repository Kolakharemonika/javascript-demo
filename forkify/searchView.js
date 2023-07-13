
import View from './view.js'

class SearchView extends View {
    _parentElement = document.querySelector('.section-search-result');
    _errorMessage = 'No recipe found.';
    _message = '';
    searchinput = document.getElementById('search-input');
    _pagination;
    _parentElementPagination = document.querySelector('.pagination');

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

                        <img src="${recipe.imageUrl}" alt="${recipe.title}">
                    </div>
                    <span class="flex-row pt-10 recipe-dec">
                        <span class="heading--3">${recipe.title?.length >= 30 ? (recipe.title.slice(0, 30)).toUpperCase() + '...' : (recipe.title).toUpperCase()}</span>
                        <span>${recipe.publisher}</span>
                    </span>
                </div>  </button>`
        }).join('')} `;


        // html += `<div>
        //             <span><a href="#">Page 1</a></span>
        //             <span class="float-rt"><a href="#">Page 2</a></span>
        //         </div> `;

        return html;
    }

    renderPagination(data) {
        if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError;

        this._pagination = data;
        const markup = this._generatePaginationMarkup();
        this._clearPagination();
        this._parentElementPagination.insertAdjacentHTML('afterbegin', markup);
    }

    addHandlerClick(handler) {
        this._parentElementPagination.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn--inline');
            console.log(btn);
            if (!btn) return;
            const goToPage = +btn.dataset.goto;

            handler(goToPage);
        })
    }

    _clearPagination() {
        this._parentElementPagination.innerHTML = '';
    }

    _generatePaginationMarkup() {

        const numPages = Math.ceil(this._pagination.results.length / this._pagination.resultPerPage)
        console.log(numPages);

        //page 1 and there are other pages
        if (this._pagination.page === 1 && numPages > 1) {
            this._parentElementPagination.classList.remove('flex');
            return `
                            <button data-goto="${this._pagination.page + 1}" class="flex float-rt button btn btn--inline" >
                                Page ${this._pagination.page + 1} <svg class="nav__icon">
                                    <use href="img/icons.svg#icon-arrow-right"></use>
                                </svg>
                            </button>`;
        }

        //last page 
        if (this._pagination.page == numPages && numPages > 1) {
            // this._parentElementPagination.classList.add('flex');
            return `<button data-goto="${this._pagination.page - 1}" class="button btn flex btn--inline">
                                <svg class="nav__icon">
                                    <use href="img/icons.svg#icon-arrow-left"></use>
                                </svg> Page ${this._pagination.page - 1}
                            </button>
                          `
        }

        // other page
        if (this._pagination.page < numPages) {
            this._parentElementPagination.classList.add('flex');
            return `<button data-goto="${this._pagination.page - 1}" class="button btn flex btn--inline">
                                <svg class="nav__icon">
                                    <use href="img/icons.svg#icon-arrow-left"></use>
                                </svg> Page ${this._pagination.page - 1}
                            </button>
                            <button data-goto="${this._pagination.page + 1}" class="flex float-rt button btn btn--inline">
                                Page ${this._pagination.page + 1} <svg class="nav__icon">
                                    <use href="img/icons.svg#icon-arrow-right"></use>
                                </svg>
                            </button>`
        }
        //page 1 and no other pages
        return '';
    }
}
export default new SearchView(); //