// import { async } from 'regenerator-runtime'

export const state = {
    recipe: {}
};

export const loadRecipe = async function (recipeId) {
    try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
        const data = await res.json();
        console.log(data, res);
        if (!res.ok) throw new Error(`${data.error} (${res.status})`);

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
        alert(err)
    }


}