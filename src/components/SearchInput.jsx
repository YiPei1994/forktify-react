import { useForkify } from '../hooks/useForkify';
import { GoSearch } from 'react-icons/go';

function SearchInput() {
  const { search, refetch } = useForkify();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search?.current?.value) return;
    refetch();
    search.current.value = '';
  };

  return (
    <form
      onSubmit={(e) => handleSearch(e)}
      className="flex justify-between rounded-full bg-white  transition-all focus-within:-translate-y-0.5 focus-within:shadow-md focus-within:shadow-slate-300/25"
    >
      <input
        type="text"
        ref={search}
        placeholder="Search over 1,000,000 recipes..."
        className="w-[300px] rounded-full  px-5 py-3 text-lg focus:outline-none"
      />
      <button
        className="flex w-[150px] items-center justify-center rounded-full bg-gradient-to-br	from-amber-300 to-red-300 px-5 py-3 uppercase text-white transition-all hover:scale-110"
        type="submit"
      >
        <GoSearch className="mr-3 text-xl" />
        Search
      </button>
    </form>
  );
}

export default SearchInput;
