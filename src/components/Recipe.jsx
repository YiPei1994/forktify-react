import { useDelete } from '../hooks/useDelete';
import { useForkify } from '../hooks/useForkify';

function Recipe({ recipe }) {
  const { publisher, image_url, title, id } = recipe;
  const { searchParams, setSearchParams } = useForkify();
  const { deletingRecipe } = useDelete();

  function handleClickOnRecipe() {
    searchParams.set('recipeId', id);
    setSearchParams(searchParams);
  }
  return (
    <div
      onClick={handleClickOnRecipe}
      className="mx-auto my-4 flex w-[90%] items-center justify-between "
    >
      <img
        className="h-12	 w-12 rounded-full"
        src={image_url}
        alt="recipe_img"
      />
      <div className="flex w-[75%] flex-col ">
        <h4>{title}</h4>
        <span>{publisher}</span>
      </div>
      <button onClick={() => deletingRecipe(id)}>X</button>
    </div>
  );
}

export default Recipe;
