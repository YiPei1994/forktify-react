import { createContext, useRef, useState } from 'react';
import { getAllRecipes, getRecipe } from '../servises/forkify';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

const ForkifyContext = createContext();

const ForkifyContextProvider = ({ children }) => {
  const search = useRef('');
  const [bookMarked, setBookMarked] = useState(
    JSON.parse(localStorage.getItem('bookmark')) || [],
  );
  const [displayBookmark, setDisplayBookmark] = useState(false);
  const [displayAddRecipe, setDisplayAddRecipe] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedRecipeId = searchParams.get('recipeId');
  const {
    data: recipes,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['recipes', search?.current?.value],
    queryFn: () => getAllRecipes(search?.current?.value),
  });

  const { data: recipeDetail, isLoadingDetail } = useQuery({
    queryKey: ['recipeDetail', selectedRecipeId],
    queryFn: () => getRecipe(selectedRecipeId),
  });

  const fetchedServings = recipeDetail?.servings;

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
        fetchedServings,
        handleAddBookmarked,
        bookMarked,
        displayBookmark,
        handleDisplayBookmark,
        handleHideBookmark,
        displayAddRecipe,
        setDisplayAddRecipe,
        searchParams,
        setSearchParams,
        isLoading,
        isLoadingDetail,
      }}
    >
      {children}
    </ForkifyContext.Provider>
  );
};

export { ForkifyContextProvider, ForkifyContext };
