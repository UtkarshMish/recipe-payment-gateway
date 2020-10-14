import axios from "axios";
async function getRecipe()
{
  let response = await axios.get(`${process.env.REACT_APP_RECIPE}`);
  return response.data;
};
export async function getRecipeWithId(id)
{
  let response = await getRecipe();
  let recipeItem;
  response.forEach(recipe => { if (recipe.id === id) recipeItem = recipe; })
  return recipeItem;
};
export default getRecipe;