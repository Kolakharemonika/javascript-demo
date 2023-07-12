// import { async } from 'regenerator-runtime'
import { API_URL } from './config.js'
import { getJSON } from './helpers.js'


export const state = {
    recipe: {}
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