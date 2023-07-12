// import { async } from 'regenerator-runtime'
import { API_URL } from './config.js'
import { getJSON } from './helpers.js'


export const state = {
    recipe: {},
    search: {
        query: '',
        results: []
    }
};

export const loadRecipe = async function (recipeId) {
    try {
        const data = await getJSON(`${API_URL}/get?rId=${recipeId}`);

        let recipe = data.recipe;
        console.log(recipe);

        state.recipe = {
            id: recipe.recipe_id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            imageUrl: recipe.image_url,
            ingredients: recipe.ingredients
        }
        // console.log(state.recipe);
    } catch (err) {
        console.error(err)
    }


}

export const loadSearchResults = async function (recipeName) {
    try {
        console.log(recipeName);
        state.search.query = recipeName;
        const data = await getJSON(`${API_URL}/search?q=${recipeName}`);
        console.log(data.recipes);

        state.search.results = data.recipes?.map(rec => {
            return {
                id: rec.recipe_id,
                title: rec.title,
                publisher: rec.publisher,
                imageUrl: rec.image_url,
            }
        });
        console.log(state.search.results);

    } catch (err) {
        console.error(err)
        throw err;
    }
}