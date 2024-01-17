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

  const searchParamsId = searchParams.get('recipeId');
  return (
    <div
      onClick={handleClickOnRecipe}
      className={`flex w-[100%] cursor-pointer items-center justify-between px-8 py-4 transition-all duration-300 ease-in-out hover:translate-y-0.5 hover:bg-red-50 ${
        searchParamsId === id ? ' bg-red-50' : ''
      }`}
    >
      <img
        className="mr-5	 h-14 w-14 rounded-full"
        src={image_url}
        alt="recipe_img"
      />
      <div className="flex w-[80%] flex-col ">
        <h4 className="text-md overflow-hidden truncate text-ellipsis uppercase text-red-400/75">
          {title}
        </h4>
        <span className="text-sm text-slate-400 ">{publisher}</span>
      </div>
    </div>
  );
}

export default Recipe;
