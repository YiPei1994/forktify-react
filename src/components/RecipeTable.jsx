import React from 'react';
import { useForkify } from '../hooks/useForkify';
import Recipe from './Recipe';
import Pagination from './Pagination';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../constatns/PageSize';
import Spinner from './Spinner';

function RecipeTable() {
  const { recipes, isLoading } = useForkify();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const count = recipes?.length;

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const pageItems = recipes?.slice(startIndex, endIndex);

  if (isLoading) return <Spinner />;
  return (
    <>
      <div>
        {pageItems?.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <div>
        <Pagination count={count} />
      </div>
    </>
  );
}

export default RecipeTable;
