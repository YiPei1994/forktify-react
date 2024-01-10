import React from 'react';
import { useRecipes } from '../hooks/useRecipes';

function RecipeTable() {
  const { data, isLoading } = useRecipes();
  console.log(data);

  if (isLoading || data === undefined) {
    return <div>Loading...</div>; // You can replace this with your loading indicator
  }

  return <div>recipeTable</div>;
}

export default RecipeTable;
