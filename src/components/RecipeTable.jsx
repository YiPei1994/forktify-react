import { useRecipes } from '../hooks/useRecipes';

function RecipeTable() {
  const { data, isLoading } = useRecipes();
  console.log(data);
  return <div></div>;
}

export default RecipeTable;
