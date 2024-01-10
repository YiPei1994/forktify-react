import React from 'react';
import { useForkify } from '../hooks/useForkify';
import Recipe from './Recipe';

function RecipeTable() {
  const { loadingSearched, searchedRecipes } = useForkify();
  if (loadingSearched) return;

  return (
    <div>
      {searchedRecipes?.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeTable;
