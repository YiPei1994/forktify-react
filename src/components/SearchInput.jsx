import { useState } from 'react';
import { useForkify } from '../hooks/useForkify';
import { useRecipes } from '../hooks/useRecipes';

function SearchInput() {
  const { searchRecipes } = useRecipes();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    searchRecipes(search);
    setSearch('');
  };
  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchInput;
