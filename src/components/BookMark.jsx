import { useForkify } from '../hooks/useForkify';
import Recipe from './Recipe';

function BookMark() {
  const { bookMarked, handleHideBookmark, displayBookmark } = useForkify();

  return (
    <div
      onMouseLeave={handleHideBookmark}
      className={`${
        displayBookmark
          ? 'pointer-events-auto opacity-100 transition-opacity duration-1000'
          : 'pointer-events-none opacity-0 transition-opacity duration-1000'
      } absolute right-0 top-[102px] bg-white py-2`}
    >
      {bookMarked.map((mark) => (
        <Recipe key={mark.id} recipe={mark} />
      ))}
    </div>
  );
}

export default BookMark;
