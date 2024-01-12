import { useForkify } from '../hooks/useForkify';
import Recipe from './Recipe';

function BookMark() {
  const { bookMarked } = useForkify();

  return (
    <div>
      {bookMarked.map((mark) => (
        <Recipe key={mark.id} recipe={mark} />
      ))}
    </div>
  );
}

export default BookMark;
