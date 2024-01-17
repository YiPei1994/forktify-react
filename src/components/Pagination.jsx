import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../constatns/PageSize';
import { HiChevronLeft } from 'react-icons/hi2';
import { HiChevronRight } from 'react-icons/hi2';

function Pagination({ count = 0 }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / PAGE_SIZE);
  function previousPage() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('page', previous);
    setSearchParams(searchParams);
  }
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;
  return (
    <div className="flex  items-center justify-between gap-4 p-8">
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1} </span> to{' '}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span>{count}</span> results
      </p>

      <div className="flex w-1/2 justify-between">
        <button
          className="flex items-center gap-3 rounded-full p-2 transition-all duration-300 hover:bg-red-50 disabled:opacity-0"
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft />
          <span>Previous</span>
        </button>

        <button
          className="flex items-center gap-3 rounded-full p-2 transition-all duration-300 hover:bg-red-50 disabled:opacity-0"
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
