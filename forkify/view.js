export default class View {
    _data;

    render(data) {
        if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError;

        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    renderSpinner = function () {
        const markup = `<div class="spinner"><svg class="nav__icon ">
                <use href="img/icons.svg#icon-loader"></use>
            </svg>
        </div>`;
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }


    renderError(message = this._errorMessage) {
        const markup = `  <div class="error">
            <div>
                <svg class="nav__icon">
                    <use href="img/icons.svg#icon-alert-triangle"></use>
                </svg>
                <p>${message}</p>
            </div>
        </div>`
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
} 