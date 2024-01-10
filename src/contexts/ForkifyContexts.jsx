import { createContext, useState } from 'react';
import { useRecipes } from '../hooks/useRecipes';

const ForkifyContext = createContext();

const ForkifyContextProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const {
    searchRecipes,
    isLoading: loadingSearch,
    data: searchedRecipes,
  } = useRecipes();
  return (
    <ForkifyContext.Provider
      value={{
        search,
        setSearch,
        searchRecipes,
        loadingSearch,
        searchedRecipes,
      }}
    >
      {children}
    </ForkifyContext.Provider>
  );
};

export { ForkifyContextProvider, ForkifyContext };
