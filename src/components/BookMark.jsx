import { useForkify } from '../hooks/useForkify';
import Recipe from './Recipe';

function BookMark() {
  const { bookMarked, handleHideBookmark, displayBookmark } = useForkify();

  return (
    <div
      onMouseLeave={handleHideBookmark}
      className={`${
        displayBookmark
          ? 'pointer-events-auto opacity-100 transition-opacity duration-500'
          : 'pointer-events-none opacity-0 transition-opacity duration-500'
      } absolute right-0 top-[102px] z-50 max-w-[350px] bg-white py-2`}
    >
      {bookMarked.length > 0 ? (
        bookMarked.map((mark) => <Recipe key={mark.id} recipe={mark} />)
      ) : (
        <p className="px-12 py-8">
          No bookmarks yet, find a nice recipe to bookmark.
        </p>
      )}
    </div>
  );
}

export default BookMark;
