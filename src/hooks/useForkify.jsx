import { useContext } from 'react';
import { ForkifyContext } from '../contexts/ForkifyContexts';

const useForkify = () => {
  const context = useContext(ForkifyContext);
  if (context === undefined) {
    console.error('ForkifyContext was used outside of ForkifyContextProvider');
  }
  return context;
};

export { useForkify };
