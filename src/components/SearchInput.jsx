import { useForkify } from '../hooks/useForkify';

function SearchInput() {
  const { searchRecipes, search, setSearch } = useForkify();

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
