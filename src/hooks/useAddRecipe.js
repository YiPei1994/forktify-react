import { useMutation } from '@tanstack/react-query';
import { createRecipe } from '../servises/forkify';

export const useAddRecipe = () => {
  const { mutate: addRecipe, isLoading } = useMutation({
    mutationFn: createRecipe,
    onSuccess: () => {
      console.log('recipe added');
    },
    onError: (err) => console.error(err.message),
  });

  return { addRecipe, isLoading };
};
