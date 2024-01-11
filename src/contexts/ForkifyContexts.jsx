import { createContext, useRef, useState } from 'react';
import { getAllRecipes, getRecipe } from '../servises/forkify';
import { useQuery } from '@tanstack/react-query';

const ForkifyContext = createContext();

const ForkifyContextProvider = ({ children }) => {
  const search = useRef('');
  const [recipeId, setRecipeId] = useState(0);

  const { data: recipes, refetch } = useQuery({
    queryKey: ['recipes', search?.current?.value],
    queryFn: () => getAllRecipes(search?.current?.value),
  });

  const { data: recipeDetail, refetch: refetchDetail } = useQuery({
    queryKey: ['recipeDetail', recipeId],
    queryFn: () => getRecipe(recipeId),
  });

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
      }}
    >
      {children}
    </ForkifyContext.Provider>
  );
};

export { ForkifyContextProvider, ForkifyContext };
