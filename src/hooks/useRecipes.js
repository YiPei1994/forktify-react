import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllRecipes } from '../servises/forkify';
import toast from 'react-hot-toast';

export const useRecipes = () => {
  const queryClient = useQueryClient();
  const {
    mutate: searchRecipes,
    isLoading,
    data,
  } = useMutation({
    mutationFn: getAllRecipes,
    onSuccess: () => {
      toast.success('Recipe loaded');
      queryClient.invalidateQueries({ queryKey: ['recipe'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { searchRecipes, isLoading, data };
};
