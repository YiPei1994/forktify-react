import { useForkify } from '../hooks/useForkify';

function ForkifyOperations() {
  const { handleDisplayBookmark, handleHideBookmark, setDisplayAddRecipe } =
    useForkify();
  return (
    <div>
      <button onClick={() => setDisplayAddRecipe((d) => !d)}>add recipe</button>
      <button
        onMouseOver={handleDisplayBookmark}
        onMouseOut={handleHideBookmark}
      >
        Bookmarks
      </button>
    </div>
  );
}

export default ForkifyOperations;
