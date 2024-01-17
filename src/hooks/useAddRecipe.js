import { useMutation } from '@tanstack/react-query';
import { createRecipe } from '../servises/forkify';
import toast from 'react-hot-toast';

export const useAddRecipe = () => {
  const { mutate: addRecipe, isLoading } = useMutation({
    mutationFn: createRecipe,
    onSuccess: () => {
      toast.success('Recipe succssefully added');
    },
    onError: (err) => console.error(err.message),
  });

  return { addRecipe, isLoading };
};
