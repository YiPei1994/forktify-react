const API_KEY = 'd166115e-6126-46d3-92ec-663f49f62d3b';
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
export const getAllRecipes = async (search) => {
  try {
    const res = await fetch(`${API_URL}?search=${search}`);

    if (!res.ok) {
      throw new Error('Couldnt fetch any recipes');
    }

    const data = await res.json();
    const recipes = await data.data.recipes;
    return recipes;
  } catch (error) {
    console.error('Problem with fetching all recipes', error);
    throw error;
  }
};

export const getRecipe = async (id) => {
  if (!id && id !== 0) return null;
  try {
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) {
      throw new Error('Couldnt fetch any recipe');
    }

    const data = await res.json();
    const recipe = await data.data.recipe;
    return recipe;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
};

export const createRecipe = async (newRecipe) => {
  const ingredients = Object.entries(newRecipe)
    .filter((entry) => entry[0].startsWith('ingredient') && entry[1] !== '')
    .map((ing) => {
      const ingArr = ing[1].split(',').map((el) => el.trim());
      if (ingArr.length < 3) {
        throw new Error('wrong ingredients format');
      }
      const [quantity, unit, description] = ingArr;

      return { quantity: quantity ? +quantity : null, unit, description };
    });

  const newRecipeObject = {
    title: newRecipe.title,
    source_url: newRecipe.url,
    image_url: newRecipe.image_url,
    publisher: newRecipe.publisher,
    cooking_time: +newRecipe.prep_time,
    servings: +newRecipe.servings,
    ingredients,
  };

  const res = await fetch(`${API_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRecipeObject),
  });

  if (!res.ok) {
    const errorResponse = await res.json();
    console.error('Error creating recipe:', errorResponse);
    throw new Error('Could not create recipe');
  }

  const data = await res.json();
  console.log(data);
  return data;
};

export const deleteRecipe = async (id) => {
  console.log(id);
  const res = await fetch(`${API_URL}/${id}?key=${API_KEY}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Couldnt delete recipes');
  }

  const data = await res.json();

  return data;
};
