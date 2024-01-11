import { useForkify } from '../hooks/useForkify';

function SearchInput() {
  const { search, refetch } = useForkify();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search?.current?.value) return;
    refetch();
    search.current.value = '';
  };

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input type="text" ref={search} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchInput;
