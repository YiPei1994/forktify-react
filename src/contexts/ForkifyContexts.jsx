import { createContext } from 'react';

const ForkifyContext = createContext();

const ForkifyContextProvider = ({ children }) => {
  return (
    <ForkifyContext.Provider value={{}}>{children}</ForkifyContext.Provider>
  );
};

export { ForkifyContextProvider, ForkifyContext };
