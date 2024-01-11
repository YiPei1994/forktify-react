const API_KEY = 'd166115e-6126-46d3-92ec-663f49f62d3b';
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';
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

export const createRecipe = async ({ name, newData }) => {
  const res = await fetch(`${API_URL}?search=${name}&key=${API_KEY}`, {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Couldnt create recipes');
  }

  const data = await res.json();

  return data;
};

export const deleteRecipe = async (id) => {
  const res = await fetch(`${API_URL}/${id}?key=${API_KEY}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Couldnt delete recipes');
  }

  const data = await res.json();

  return data;
};
