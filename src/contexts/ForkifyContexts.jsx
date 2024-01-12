import { createContext, useRef, useState } from 'react';
import { getAllRecipes, getRecipe } from '../servises/forkify';
import { useQuery } from '@tanstack/react-query';

const ForkifyContext = createContext();

const ForkifyContextProvider = ({ children }) => {
  const search = useRef('');
  const [recipeId, setRecipeId] = useState(0);
  const [bookMarked, setBookMarked] = useState(
    JSON.parse(localStorage.getItem('bookmark')) || [],
  );
  const [displayBookmark, setDisplayBookmark] = useState(false);
  const [displayAddRecipe, setDisplayAddRecipe] = useState(false);

  const { data: recipes, refetch } = useQuery({
    queryKey: ['recipes', search?.current?.value],
    queryFn: () => getAllRecipes(search?.current?.value),
  });

  const { data: recipeDetail, refetch: refetchDetail } = useQuery({
    queryKey: ['recipeDetail', recipeId],
    queryFn: () => getRecipe(recipeId),
  });

  const servings = recipeDetail?.servings;

  function handleAddBookmarked(recipe) {
    if (!recipe) return;
    const exist = bookMarked.findIndex((book) => book.id === recipe.id);

    if (exist !== -1) {
      const filteredBook = bookMarked.filter((book) => book.id !== recipe.id);
      console.log(filteredBook);
      setBookMarked(filteredBook);

      localStorage.setItem('bookmark', JSON.stringify(filteredBook));
    } else {
      setBookMarked([...bookMarked, recipe]);

      localStorage.setItem('bookmark', JSON.stringify([...bookMarked, recipe]));
    }
  }

  function handleDisplayBookmark() {
    setDisplayBookmark(true);
  }
  function handleHideBookmark() {
    setDisplayBookmark(false);
  }
  return (
    <ForkifyContext.Provider
      value={{
        search,
        recipes,
        refetch,
        recipeDetail,
        refetchDetail,
        recipeId,
        setRecipeId,
        servings,
        handleAddBookmarked,
        bookMarked,
        displayBookmark,
        handleDisplayBookmark,
        handleHideBookmark,
        displayAddRecipe,
        setDisplayAddRecipe,
      }}
    >
      {children}
    </ForkifyContext.Provider>
  );
};

export { ForkifyContextProvider, ForkifyContext };
