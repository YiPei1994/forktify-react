import { useMutation } from '@tanstack/react-query';
import { deleteRecipe } from '../servises/forkify';

export const useDelete = () => {
  const { mutate: deletingRecipe, isLoading } = useMutation({
    mutationFn: deleteRecipe,
    onSuccess: () => {
      console.log('Recipe Deleted');
    },
    onError: (err) => console.error(err),
  });

  return { deletingRecipe, isLoading };
};
