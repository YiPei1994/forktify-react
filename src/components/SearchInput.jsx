import { useState } from 'react';
import { useRecipes } from '../hooks/useRecipes';

function SearchInput() {
  const [search, setSearch] = useState('');
  const { searchRecipes } = useRecipes();

  const handleSearch = () => {
    if (!search) return;
    searchRecipes(search);
    setSearch('');
  };
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchInput;
